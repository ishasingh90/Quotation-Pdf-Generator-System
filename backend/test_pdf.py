import os
import sys

# Add backend directory to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from app.database import SessionLocal, Base, engine
from app import models, schemas, crud
from app.pdf_engine import render_quotation_pdf

# Ensure tables are created
Base.metadata.create_all(bind=engine)

db = SessionLocal()

try:
    # 1. Create a client if not exists
    client = db.query(models.Client).filter(models.Client.name == "Solar Sparkle Solutions").first()
    if not client:
        client_data = schemas.ClientCreate(
            name="Solar Sparkle Solutions",
            logo_text="ARKOSE INFOSOFT",
            logo_url="",
            theme_navy="#0e0e0e",       # Dark Grey / Black
            theme_accent="#e1251b",     # Red
            theme_accent2="#f2a818",    # Gold / Yellow
        )
        client = crud.create_client(db, client_data)
        print(f"Created client: {client.name}")
    else:
        print(f"Using existing client: {client.name}")

    # 2. Define pages list
    pages_list = [
        {
            "id": "cover-1",
            "type": "cover",
            "title": "Cover Page",
            "cover_title_main": "Social Media",
            "cover_title_accent": "Marketing",
            "cover_subtitle": "Proposal for Social Media Marketing",
            "cover_presentation_for": "Solar Sparkle Solutions",
            "cover_image_url": "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop"
        },
        {
            "id": "intro-2",
            "type": "content",
            "title": "Budget Proposal",
            "sections": [
                {
                    "id": "sec-1",
                    "title": "Introduction:",
                    "type": "text",
                    "text": "Arkose Infosoft is a digital marketing and technology solutions company dedicated to helping businesses grow their online presence, attract potential customers, and build strong brand recognition. Through strategic social media marketing, creative content development, and audience engagement, we help businesses connect with their target market effectively.\n\nOur goal is to create meaningful engagement, enhance brand visibility, and support long-term business growth through a professional and result-oriented social media strategy."
                },
                {
                    "id": "sec-2",
                    "title": "Services Included:",
                    "type": "bullets",
                    "list_items": [
                        "Content Strategy & Planning",
                        "Reels & Creative Content Creation",
                        "Social Media Management",
                        "Audience Engagement",
                        "Performance Tracking & Reporting",
                        "Brand Awareness & Local Market Growth"
                    ]
                }
            ]
        },
        {
            "id": "obj-3",
            "type": "content",
            "title": "Budget Proposal",
            "sections": [
                {
                    "id": "sec-3",
                    "title": "Objective:",
                    "type": "text",
                    "text": "Build a strong digital presence for Solar Sparkle Solutions, increase brand awareness, generate quality enquiries, and educate customers about the benefits of solar energy through strategic social media marketing."
                },
                {
                    "id": "sec-4",
                    "title": "Goals:",
                    "type": "bullets",
                    "list_items": [
                        "Increase brand awareness",
                        "Build trust and brand authority",
                        "Increase engagement on Instagram & Facebook",
                        "Drive website traffic and product discovery",
                        "Improve customer retention and loyalty",
                        "Educate customers about solar savings and benefits"
                    ]
                },
                {
                    "id": "sec-5",
                    "title": "Target Audience:",
                    "type": "bullets",
                    "list_items": [
                        "Homeowners looking to reduce electricity bills",
                        "Residential property owners",
                        "Commercial buildings & office owners",
                        "Factories and industrial businesses",
                        "Builders, architects & real estate developers",
                        "Schools, hospitals & institutions",
                        "Environment-conscious customers",
                        "Businesses seeking sustainable energy solutions"
                    ]
                }
            ]
        },
        {
            "id": "deliv-4",
            "type": "deliverables",
            "title": "Budget Proposal",
            "total_posts_text": "Total Content: 25 Posts Per Month",
            "deliverable_groups": [
                {
                    "id": "dg-1",
                    "title": "15 Reels",
                    "items": [
                        "Influencer Reels (Professional Shoot Day)",
                        "Brand Awareness & Educational Reels"
                    ]
                },
                {
                    "id": "dg-2",
                    "title": "5 Carousel Posts",
                    "items": [
                        "Solar Installation Process Explained",
                        "Electricity Bill Savings Calculator",
                        "Government Subsidy & Benefits Information",
                        "Solar Myths vs Facts"
                    ]
                },
                {
                    "id": "dg-3",
                    "title": "5 Static Posts",
                    "items": [
                        "Customer Testimonial & Success Story",
                        "Promotional Offer / Seasonal Campaign",
                        "Brand Achievement & Trust Building Post"
                    ]
                }
            ]
        },
        {
            "id": "strat-5",
            "type": "content",
            "title": "Budget Proposal",
            "sections": [
                {
                    "id": "sec-6",
                    "title": "Social Media Growth Strategy:",
                    "type": "bullets",
                    "list_items": [
                        "Consistent brand-focused content creation",
                        "Solar project showcases and installation updates",
                        "Educational posts about solar energy benefits",
                        "Customer success stories and testimonials",
                        "Reels and short-form video marketing",
                        "Strategic content planning for organic growth"
                    ]
                },
                {
                    "id": "sec-7",
                    "title": "Performance Metrics:",
                    "type": "bullets",
                    "list_items": [
                        "KPIs to Measure Success:",
                        "Follower Growth Rate",
                        "Engagement Rate (likes, shares, comments)",
                        "Inquiries",
                        "Video Views & Watch Time"
                    ]
                }
            ]
        },
        {
            "id": "plat-6",
            "type": "platforms",
            "title": "Budget Proposal",
            "platforms": [
                {
                    "id": "p-1",
                    "name": "INSTAGRAM:",
                    "items": [
                        "Insta Profile Optimize",
                        "Content Strategy & Planning",
                        "Analytics & Reporting",
                        "Trending Hashtag Research"
                    ]
                },
                {
                    "id": "p-2",
                    "name": "FACEBOOK:",
                    "items": [
                        "Facebook Profile Optimize",
                        "Content Strategy & Planning",
                        "Analytics & Reporting",
                        "Trending Hashtag Research"
                    ]
                },
                {
                    "id": "p-3",
                    "name": "YOUTUBE:",
                    "items": [
                        "Youtube Profile Optimize",
                        "Content Strategy & Planning",
                        "Analytics & Reporting",
                        "Trending Hashtag Research"
                    ]
                }
            ],
            "price_label": "G. Total",
            "price_value": "₹12,999 / Month",
            "payment_label": "For Payment :",
            "payment_details": [
                "Account number: 1962100100005409",
                "IFSC Code: PUNB0196210"
            ]
        },
        {
            "id": "terms-7",
            "type": "payment_terms",
            "title": "Budget Proposal",
            "final_note": "At Arkose Infosoft, we believe social media marketing is more than just posting content—it is about building a strong brand presence, creating customer trust, and generating meaningful engagement.\n\nThrough consistent content creation, engaging reels, project showcases, customer testimonials, and audience interaction, we aim to strengthen Solar Sparkle Solutions' online presence and support its long-term business growth.",
            "milestones": [
                { "id": "m-1", "name": "Advance Payment", "payment": "50% before project commencement" },
                { "id": "m-2", "name": "Final Payment", "payment": "50% after completion and before final handover" }
            ],
            "contact_details": [
                "+91 9839591207",
                "www.arkoseinfosoft.in",
                "117/44, near RTO Office Sarvodaya Nagar, Model Town, Sarvodaya Nagar, Kanpur, Uttar Pradesh 208005"
            ],
            "signatory_text": "Client Authorized Signatory (Signature & Seal)"
        }
    ]

    # 3. Create a quotation if not exists
    quotation = db.query(models.Quotation).filter(models.Quotation.client_id == client.id).first()
    if not quotation:
        quote_data = schemas.QuotationCreate(
            client_id=client.id,
            title="Social Media Marketing Proposal",
            pages=pages_list
        )
        quotation = crud.create_quotation(db, quote_data)
        print(f"Created quotation: {quotation.title}")
    else:
        # Update pages list to ensure it matches
        quotation.pages = pages_list
        db.commit()
        db.refresh(quotation)
        print(f"Updated pages of quotation: {quotation.title}")

    # 4. Render PDF
    print("Rendering PDF...")
    pdf_bytes = render_quotation_pdf(quotation)

    output_path = os.path.join(os.path.dirname(__file__), "test_proposal.pdf")
    with open(output_path, "wb") as f:
        f.write(pdf_bytes)

    print(f"Successfully rendered PDF and saved to: {output_path}")

except Exception as e:
    import traceback
    print(f"An error occurred: {e}")
    traceback.print_exc()
finally:
    db.close()
