import { redirect } from 'next/navigation';

const GOOGLE_FORMS = [
  'https://docs.google.com/forms/d/e/1FAIpQLSd9yWawfSQM_KOGq77qdnHKZnaK2ksg0efToyLpVV-uqer_Nw/viewform?usp=header',//1
  'https://docs.google.com/forms/d/e/1FAIpQLSfWx4fNRMiO5XmI2gQRGzxKyzPQ6R6XYiL9pX0JJywsPcLGMw/viewform',//2
];

export default function Home() {
  // Rastgele form seç (0, 1, veya 2 indeks)
  const randomIndex = Math.floor(Math.random() * GOOGLE_FORMS.length);
  const randomForm = GOOGLE_FORMS[randomIndex];

  // Seçilen forma yönlendir
  redirect(randomForm);

}
