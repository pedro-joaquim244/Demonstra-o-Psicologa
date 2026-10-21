import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
// Barras de endereço móveis alteram a altura visível do viewport durante a
// rolagem. Não recriar os triggers nessas pequenas variações evita refreshes
// que competem com o gesto nativo; mudanças reais, como orientação, seguem
// sendo tratadas pelo ScrollTrigger.
ScrollTrigger.config({ ignoreMobileResize: true, limitCallbacks: true });

export { gsap, ScrollTrigger };

// Cada componente possui seu próprio contexto e desfaz efeitos ao desmontar
// ou mudar de breakpoint. Conteúdo está visível por padrão, inclusive sem motion.
export function useScrollScene(ref, setup) {
  const setupRef = useRef(setup);
  setupRef.current = setup;

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return undefined;

    const ctx = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add({
        desktop: '(min-width: 1024px) and (min-height: 650px)',
        tablet: '(min-width: 651px) and (max-width: 1023px) and (min-height: 650px)',
        mobile: '(max-width: 650px), (max-height: 649px)',
        reduced: '(prefers-reduced-motion: reduce)',
      }, (context) => setupRef.current(context.conditions, root));
      return () => media.revert();
    }, root);
    return () => ctx.revert();
  }, [ref]);
}
