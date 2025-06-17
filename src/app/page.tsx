import Footer from '@/components/footer';
import PayBills from '@/components/pay-bills';
import ShopOnline from '@/components/shop-online';
import MultiCurrencyWalletSection from '@/components/wallet';

export default function Home() {
  return (
    <>
      <main className="flex flex-col  row-start-2 items-center sm:items-start font-[family-name:var(--font-dm-sans)]">
        <MultiCurrencyWalletSection />
        <ShopOnline />
        <PayBills />
      </main>
      <Footer />
    </>
  );
}
