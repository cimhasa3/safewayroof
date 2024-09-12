import Head from 'next/head';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Review from '../components/Review'; // Assuming you have a Review component

export default function RoofRepairMontauk() {
  return (
    <div>
      <Head>
        <title>Roof Repair Montauk NY - All Island Pro Inc.</title>
        <meta
          name="description"
          content="All Island Pro Inc. provides fast and reliable roof repair services in Montauk, NY. Contact us today for expert roof leak repair and maintenance."
        />
      </Head>
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Roof Repair in Montauk, NY
          </h1>
          <p className="text-lg mb-6">
            If you’re in Montauk, NY, and dealing with roof leaks or damage, 
            <strong> All Island Pro Inc.</strong> is your trusted local roofing expert. 
            We specialize in fast and reliable roof repairs, ensuring that your home is 
            protected from the elements.
          </p>
          <p className="text-lg mb-6">
            Whether it’s a minor leak or more significant damage, our GAF-certified 
            team is fully equipped to handle all your roofing needs.
          </p>
          <p className="text-lg mb-6">
            Contact us today to schedule an inspection or repair. Call us at 
            <a href="tel:8006456676" className="text-blue-600"> (800) 645-6676</a> for a quick response.
          </p>
        </div>
      </section>

      {/* Review Section */}
      <Review />
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}