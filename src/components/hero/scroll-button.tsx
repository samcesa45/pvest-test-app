import ArrowSmall from '../svgs/arrow-small';
import MouseSmall from '../svgs/mouse-small';

export default function ScrollButtons({
  onScroll,
}: {
  onScroll: (dir: 'up' | 'down') => void;
}) {
  return (
    <div className="flex justify-center items-center gap-2">
      <button
        onClick={() => onScroll('up')}
        className="animate-bounce transition-all cursor-pointer"
      >
        <ArrowSmall />
      </button>
      <p className="text-sm text-black/30 ">or</p>
      <button
        onClick={() => onScroll('down')}
        className="animate-bounce transition-all cursor-pointer"
      >
        <MouseSmall />
      </button>
      <p className="text-sm text-black/30">Scroll down</p>
    </div>
  );
}
