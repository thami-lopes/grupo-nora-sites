import { notFound, redirect } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getCourseBySlug, isPurchasable } from "../../lib/courses";
import CheckoutForm from "./CheckoutForm";
import styles from "./checkout.module.css";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  return {
    title: course
      ? `Inscrição — ${course.name} | Nora Educação`
      : "Inscrição | Nora Educação",
  };
}

export default async function CheckoutPage({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();
  if (!isPurchasable(course)) redirect(`/cursos/${course.slug}`);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <CheckoutForm course={course} />
      </main>
      <Footer />
    </>
  );
}
