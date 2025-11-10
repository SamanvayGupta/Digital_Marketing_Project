import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Blog1() {
  return (
    <>
      <SEO
        title="Top 5 Budget Meals Near Campus | TOMATO Blog"
        description="Student-friendly food under budget—Chole Kulche, Momos, Aloo Paratha, Maggi, and Paneer Rolls. Eat well without overspending."
        url="https://YOUR-DOMAIN.com/blog1"
        image="/tomatoo.png"
        keywords={[
          "budget meals",
          "student food",
          "cheap eats",
          "college food",
          "affordable meals"
        ]}
      />

      <Navbar />

      {/* top padding to prevent navbar overlap */}
      <main className="max-w-3xl mx-auto px-4 pt-28 pb-16">
        <h1 className="text-4xl font-bold mb-4">
          Top 5 Budget Meals Near Campus 🍽️
        </h1>

        <p className="text-muted-foreground mb-10 text-sm">
          TOMATO Food Blog · Updated Recently
        </p>

        <p className="text-lg leading-8 mb-6">
          Being a student means managing assignments, attendance, friendships,
          sleep schedules, and hunger — all at the same time. And while hostel
          mess food exists… we all know the story there 😅. So here’s the good
          news — you don’t need to spend a lot to eat well.
        </p>

        <p className="text-lg leading-8 mb-6">
          Here are the <strong>Top 5 budget-friendly meals</strong> near campus
          that taste great, fill your stomach, and respect your wallet.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">1. Chole Kulche Plate — ₹50–80</h2>
        <p className="text-lg leading-8 mb-6">
          A classic. Soft kulchas + spicy chole = unbeatable combo. Perfect for
          lunch breaks and “I’m starving after class” moments.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">2. Veg Momos — ₹60–90</h2>
        <p className="text-lg leading-8 mb-6">
          Whether steamed or fried, momos are the official emotional support
          food of students. Cheap, quick, tasty. Enough said.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">3. Aloo Paratha + Curd — ₹40–70</h2>
        <p className="text-lg leading-8 mb-6">
          Morning classes hit differently when you start the day with hot parathas.
          Affordable and guaranteed to put you in a good mood.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">4. Masala Maggi — ₹40–60</h2>
        <p className="text-lg leading-8 mb-6">
          Maggi is not just food. It is emotion. Also, the perfect late-night
          study partner when hunger hits at 1:47 AM.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">5. Paneer Roll — ₹70–100</h2>
        <p className="text-lg leading-8 mb-10">
          Loaded, tasty, and super satisfying. Easy to carry while walking to
          class because you’re definitely going to be late 😄.
        </p>

        <div className="rounded-lg border-l-4 border-primary bg-primary/10 dark:bg-primary/20 p-4 text-base leading-7">
          <strong className="text-primary font-semibold">Pro Tip:</strong>{" "}
          <span className="text-foreground">
            If you ever feel broke, just search <strong>“Offers”</strong> inside{" "}
            <strong>TOMATO</strong> — we keep deals running just for students ❤️🍅
          </span>
        </div>

        <p className="text-lg leading-8 mt-6">
          So next time hunger hits — don’t settle. Eat well, stay on budget,
          and remember: happiness sometimes looks like a warm plate of food.
        </p>
      </main>

      <Footer />
    </>
  );
}
