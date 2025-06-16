import Footer from '@/components/footer';
import PayBills from '@/components/pay-bills';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start font-[family-name:var(--font-dm-sans)]">
        <PayBills />
      </main>
      <Footer />
    </>
  );
}
