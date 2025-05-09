# **L'Maalem – App Flow, Pages & Roles**

## **👥 User Roles**

* **Craftsman (Service Provider)**

* **Client (Job Requester)**

All users interact with the same public-facing web app. No admin dashboard for now.

---

## **🌐 Pages & Functions**

### **1\. Landing Page**

* Hero section with CTA ("Post Your Service" or "Find a Maalem")

* Categories (plumbing, electrical, painting, etc.)

* Cities served: Casablanca, Rabat, Salé

* "How it works" section

* "Coming Soon" app teaser

### **2\. Craftsman Listing Page**

* Grid layout of craftsmen filtered by service and/or city

* Each card: Name, service, city, rating (optional), WhatsApp icon

### **3\. Craftsman Profile Page**

* Photo, Bio, Service Category, Location

* WhatsApp Contact Button (auto-filled with profile ID)

* Testimonials (Phase 2\)

### **4\. Client Job Request Page**

* Simple form: Service needed, city, preferred date, description

* WhatsApp CTA or manual review by internal team

### **5\. Craftsman Signup Page**

* Name, Phone, City, Services, Description, Experience

* Optional: Upload image or photo ID (manually reviewed)

* After form: Thank you message \+ WhatsApp community invitation

### **6\. Confirmation / Thank You Pages**

* For both job request and profile submission

* Encourages users to share or follow L’Maalem on social

### **7\. Static Pages**

* Terms of Service

* Privacy Policy

* About Us / Contact Page

---

## **🔄 User Flows**

### **🧑‍🔧 Craftsman Flow**

1. Visit website

2. Click “Post Your Service” or scroll to signup section

3. Fill profile submission form

4. Receive confirmation \+ WhatsApp group link

5. Appear in the directory (after internal review)

### **🧍 Client Flow**

1. Visit website

2. Select category \+ city

3. Browse craftsman cards or submit job request

4. Click WhatsApp to chat

5. Connect and book directly with provider

---

## **📌 Technical Notes**

* All communication via WhatsApp (for MVP)

* Profile submissions stored in Airtable or Webflow CMS

* Filtering logic via CMS categories (city, service)

* Minimal login/authentication (none required for now)

This architecture ensures a fast launch while maintaining flexibility for growth and feature additions later.

