import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const GOOGLE_FORMS = [
  "https://docs.google.com/forms/d/e/1FAIpQLSd9yWawfSQM_KOGq77qdnHKZnaK2ksg0efToyLpVV-uqer_Nw/viewform?usp=header",
  "https://docs.google.com/forms/d/e/1FAIpQLSfWx4fNRMiO5XmI2gQRGzxKyzPQ6R6XYiL9pX0JJywsPcLGMw/viewform",
];

export function middleware(request: NextRequest) {
  // Ana sayfaya gelen istekleri kontrol et
  if (request.nextUrl.pathname === "/") {
    // Rastgele form seç (%50 - %50)
    const randomIndex = Math.floor(Math.random() * GOOGLE_FORMS.length);
    const randomForm = GOOGLE_FORMS[randomIndex];

    // Seçilen forma yönlendir
    return NextResponse.redirect(randomForm);
  }

  return NextResponse.next();
}

// Sadece ana sayfa için middleware'i çalıştır
export const config = {
  matcher: "/",
};
