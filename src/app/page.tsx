import Footer from '@/components/footer';
import Hero from '@/components/hero';
import PayBills from '@/components/pay-bills';
import ShopOnline from '@/components/shop-online';
import MultiCurrencyWalletSection from '@/components/wallet';

export default function Home() {
  return (
    <>
      <main className="flex flex-col overflow-hidden  font-[family-name:var(--font-dm-sans)]">
        <Hero />
        <MultiCurrencyWalletSection />
        <ShopOnline />
        <PayBills />
      </main>
      <Footer />
    </>
  );
}
