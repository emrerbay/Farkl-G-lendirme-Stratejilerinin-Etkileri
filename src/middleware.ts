import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const GOOGLE_FORMS = [
  "https://docs.google.com/forms/d/1fNApmsQycPhDOdnqdFnHKMfh2Fe6JJpRa11fNyl82lU/viewform",
  "https://docs.google.com/forms/d/1X5z4z3f8ErzV4aRBkbGFZpoOt5l0Da-gxpGxu4D-f2A/viewform",
  "https://docs.google.com/forms/d/1oKr5FyV0jkI4epB9H_Qjc256EpTr74hzmFth2ErR7a8/viewform",
];

export function middleware(request: NextRequest) {
  // Ana sayfaya gelen istekleri kontrol et
  if (request.nextUrl.pathname === "/") {
    // Rastgele form seç (0, 1, veya 2 indeks)
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
