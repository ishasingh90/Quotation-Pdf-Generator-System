"""
PDF generation engine for Quotations.
"""
from pathlib import Path
from jinja2 import Environment, FileSystemLoader
from playwright.sync_api import sync_playwright

TEMPLATE_DIR = Path(__file__).parent / "templates"



def render_quotation_pdf(quotation) -> bytes:
    """quotation: a Quotation ORM instance with .client populated."""
    client = quotation.client
    pages = list(quotation.pages) if quotation.pages else []

    # Stylize text logo as two lines (first word, rest of words)
    logo_text = client.logo_text or client.name or "ARKOSE INFOSOFT"
    logo_parts = logo_text.strip().split(" ", 1)
    logo_word_1 = logo_parts[0] if len(logo_parts) > 0 else "ARKOSE"
    logo_word_2 = logo_parts[1] if len(logo_parts) > 1 else "INFOSOFT"

    env = Environment(loader=FileSystemLoader(str(TEMPLATE_DIR)))
    template = env.get_template("quotation_template.html.j2")

    html_str = template.render(
        client_logo_url=client.logo_url or "",
        logo_word_1=logo_word_1.upper(),
        logo_word_2=logo_word_2.upper(),
        pages=pages,
        navy=client.theme_navy,
        accent=client.theme_accent,
        accent2=client.theme_accent2,
    )

    return _html_to_pdf(html_str)


def _html_to_pdf(html_str: str) -> bytes:
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.set_content(html_str, wait_until="networkidle")
        pdf_bytes = page.pdf(
            format="A4",
            print_background=True,
            margin={"top": "0mm", "bottom": "0mm", "left": "0mm", "right": "0mm"},
        )
        browser.close()
        return pdf_bytes

