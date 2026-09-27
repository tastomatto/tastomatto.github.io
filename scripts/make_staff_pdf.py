#!/usr/bin/env python3
"""Genera un PDF A4 con pentagrammi vuoti (staff paper) senza dipendenze esterne."""
import zlib
import struct

# A4 in punti (72 dpi)
W, H = 595.28, 841.89
MARGIN_X = 45
TITLE = "Tasto Matto - Il mio pentagramma"

def staff_lines():
    ops = []
    ops.append("0.15 0.11 0.23 rg")  # colore ink per il titolo
    ops.append("BT /F1 16 Tf 45 800 Td (Tasto Matto) Tj ET")
    ops.append("0.4 0.4 0.4 rg")
    ops.append("BT /F1 10 Tf 45 784 Td (Il mio pentagramma - www) Tj ET")

    ops.append("0.14 0.11 0.22 RG 1 w")  # linee scure
    top = 745
    line_gap = 8          # distanza tra le 5 righe di un rigo
    staff_h = line_gap * 4
    block_gap = 34        # spazio tra un rigo e il successivo
    x0, x1 = MARGIN_X, W - MARGIN_X

    y = top
    while y - staff_h > 60:
        for i in range(5):
            ly = y - i * line_gap
            ops.append(f"{x0:.1f} {ly:.1f} m {x1:.1f} {ly:.1f} l S")
        # chiave di violino stilizzata (semplice testo) a inizio rigo
        ops.append(f"BT /F1 22 Tf {x0-2:.1f} {y-staff_h+1:.1f} Td (\\120) Tj ET")
        y -= staff_h + block_gap

    return "\n".join(ops)


def build_pdf():
    content = staff_lines().encode("latin-1")
    compressed = zlib.compress(content)

    objects = []
    objects.append(b"<< /Type /Catalog /Pages 2 0 R >>")
    objects.append(b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>")
    objects.append(
        f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {W:.2f} {H:.2f}] "
        f"/Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>".encode()
    )
    objects.append(
        b"<< /Length "
        + str(len(compressed)).encode()
        + b" /Filter /FlateDecode >>\nstream\n"
        + compressed
        + b"\nendstream"
    )
    objects.append(
        b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>"
    )

    pdf = b"%PDF-1.4\n"
    offsets = []
    for i, obj in enumerate(objects, start=1):
        offsets.append(len(pdf))
        pdf += f"{i} 0 obj\n".encode() + obj + b"\nendobj\n"

    xref_pos = len(pdf)
    n = len(objects) + 1
    pdf += f"xref\n0 {n}\n".encode()
    pdf += b"0000000000 65535 f \n"
    for off in offsets:
        pdf += f"{off:010d} 00000 n \n".encode()
    pdf += (
        f"trailer\n<< /Size {n} /Root 1 0 R >>\nstartxref\n{xref_pos}\n%%EOF".encode()
    )
    return pdf


if __name__ == "__main__":
    data = build_pdf()
    with open("public/pentagramma-vuoto.pdf", "wb") as f:
        f.write(data)
    print(f"OK - {len(data)} bytes")
