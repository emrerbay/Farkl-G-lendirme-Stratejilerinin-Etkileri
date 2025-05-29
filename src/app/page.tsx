import { redirect } from 'next/navigation';

const GOOGLE_FORMS = [
  'https://docs.google.com/forms/d/1fNApmsQycPhDOdnqdFnHKMfh2Fe6JJpRa11fNyl82lU/viewform',//1
  'https://docs.google.com/forms/d/1X5z4z3f8ErzV4aRBkbGFZpoOt5l0Da-gxpGxu4D-f2A/viewform',//2
  'https://docs.google.com/forms/d/1oKr5FyV0jkI4epB9H_Qjc256EpTr74hzmFth2ErR7a8/viewform',//3
];

export default function Home() {
  // Rastgele form seç (0, 1, veya 2 indeks)
  const randomIndex = Math.floor(Math.random() * GOOGLE_FORMS.length);
  const randomForm = GOOGLE_FORMS[randomIndex];

  // Seçilen forma yönlendir
  redirect(randomForm);

}
