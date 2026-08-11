import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/z/my-project/public/images';

interface ImgJob {
  name: string;
  size: string;
  prompt: string;
}

const STYLE =
  'cinematic editorial photography, warm amber and champagne gold tones, shallow depth of field, natural warm lighting, luxury magazine aesthetic, sophisticated, understated opulence, Aman resort calm luxury, film grain, high detail, no text, no watermark';

const jobs: ImgJob[] = [
  // HERO — atmospheric rooftop lounge evening
  {
    name: 'hero.jpg',
    size: '1536x768',
    prompt: `Cinematic wide photograph of an exclusive private rooftop lounge at dusk, elegant low brass furniture, soft amber pendant lighting, distant city skyline bokeh, two crystal champagne glasses on a marble side table, warm golden hour atmosphere, refined and intimate, no people facing camera, ${STYLE}`,
  },
  // FOUNDER portrait — editorial
  {
    name: 'founder.jpg',
    size: '864x1152',
    prompt: `Editorial portrait of a sophisticated woman in her early forties, wearing an elegant ivory silk blouse, seated in a refined dark study with warm lamplight, confident serene expression looking slightly off camera, hands gently resting, cinematic depth of field, luxury magazine editorial style, warm monochrome tones, ${STYLE}`,
  },
  // EXPERIENCE CARDS
  {
    name: 'exp-community.jpg',
    size: '1344x768',
    prompt: `Cinematic photograph of an elegant private dinner gathering around a long candlelit table, warm amber glow, sophisticated guests in soft conversation, luxury restaurant interior with dark wood and brass, no faces toward camera, intimate refined atmosphere, ${STYLE}`,
  },
  {
    name: 'exp-conversation.jpg',
    size: '1344x768',
    prompt: `Cinematic over-the-shoulder photograph of two people in intimate conversation at a luxury café, warm window light streaming in, elegant gestures, sophisticated atmosphere, faces not visible, focus on gesture and setting, amber tones, ${STYLE}`,
  },
  {
    name: 'exp-events.jpg',
    size: '1344x768',
    prompt: `Cinematic photograph of an exclusive evening event in a grand luxury venue, warm ambient chandelier lighting, elegant crowd mingling softly blurred, sophisticated atmosphere, champagne tones, depth of field, no faces toward camera, ${STYLE}`,
  },
  {
    name: 'exp-values.jpg',
    size: '1344x768',
    prompt: `Cinematic photograph of a minimalist art gallery interior at evening, warm spotlights illuminating framed artwork, polished concrete floor reflections, sophisticated contemplative atmosphere, amber and gold tones, architectural editorial, ${STYLE}`,
  },
  {
    name: 'exp-relationships.jpg',
    size: '1344x768',
    prompt: `Cinematic photograph of two crystal wine glasses on a refined dark table by a tall window overlooking a glittering city at dusk, warm golden light, intimate sophisticated atmosphere, luxury hotel aesthetic, soft bokeh, ${STYLE}`,
  },
  // GALLERY — masonry, varied aspect ratios
  {
    name: 'gallery-dinner.jpg',
    size: '1024x1024',
    prompt: `Overhead cinematic photograph of an elegant private dinner table set with fine china, brass cutlery, candles and wine, warm amber glow, luxury restaurant, editorial food and lifestyle photography, ${STYLE}`,
  },
  {
    name: 'gallery-rooftop.jpg',
    size: '768x1344',
    prompt: `Vertical cinematic photograph of a luxury rooftop terrace at dusk, elegant guests silhouetted softly, warm string lights, city skyline glowing, sophisticated evening gathering, no faces toward camera, ${STYLE}`,
  },
  {
    name: 'gallery-networking.jpg',
    size: '1344x768',
    prompt: `Cinematic photograph of a refined business networking gathering in a luxury hotel lounge, warm ambient lighting, elegant professionals in soft conversation, sophisticated atmosphere, amber tones, depth of field, ${STYLE}`,
  },
  {
    name: 'gallery-beach.jpg',
    size: '768x1344',
    prompt: `Vertical cinematic photograph of a serene golden hour beach walk, elegant figures silhouetted at distance on pristine sand, warm amber sky, luxury travel editorial, contemplative atmosphere, ${STYLE}`,
  },
  {
    name: 'gallery-yacht.jpg',
    size: '1344x768',
    prompt: `Cinematic photograph of an elegant yacht gathering at sunset on calm waters, warm golden light reflecting on the sea, sophisticated lifestyle, luxury travel editorial, soft bokeh, ${STYLE}`,
  },
  {
    name: 'gallery-art.jpg',
    size: '1024x1024',
    prompt: `Cinematic photograph of guests viewing artwork in a sophisticated gallery at a private evening viewing, warm spotlights, elegant atmosphere, refined cultural event, no faces toward camera, ${STYLE}`,
  },
  // EVENTS
  {
    name: 'event-wine.jpg',
    size: '1344x768',
    prompt: `Cinematic photograph of an exclusive wine tasting evening, sommelier pouring red wine into crystal glasses, warm candlelit cellar, refined atmosphere, amber tones, luxury editorial, ${STYLE}`,
  },
  {
    name: 'event-breakfast.jpg',
    size: '1344x768',
    prompt: `Cinematic photograph of an elegant business breakfast at a luxury hotel terrace, morning golden light, refined table setting with coffee and pastries, sophisticated atmosphere, editorial, ${STYLE}`,
  },
  {
    name: 'event-art.jpg',
    size: '1344x768',
    prompt: `Cinematic photograph of a private art night reception in a contemporary gallery, warm spotlights on sculptures, elegant guests silhouetted, sophisticated cultural atmosphere, amber tones, ${STYLE}`,
  },
  {
    name: 'event-retreat.jpg',
    size: '1344x768',
    prompt: `Cinematic photograph of a serene luxury weekend retreat in a secluded villa, warm sunset light, infinity pool reflecting the sky, refined minimalist architecture, calm exclusive atmosphere, ${STYLE}`,
  },
  {
    name: 'event-travel.jpg',
    size: '1344x768',
    prompt: `Cinematic photograph of a luxury travel destination at golden hour, elegant private villa terrace overlooking the sea, warm amber tones, sophisticated aspirational lifestyle, ${STYLE}`,
  },
  {
    name: 'event-networking.jpg',
    size: '1344x768',
    prompt: `Cinematic photograph of an exclusive networking session in a sophisticated members club lounge, warm ambient lighting, elegant professionals in conversation, refined atmosphere, amber tones, ${STYLE}`,
  },
  // MEMBER STORIES — monochrome anonymous portraits
  {
    name: 'member-1.jpg',
    size: '864x1152',
    prompt: `Editorial monochrome portrait photograph, elegant woman in profile looking away, sophisticated attire, warm desaturated tones, soft window light, luxury magazine editorial, anonymous contemplative mood, film grain, ${STYLE}`,
  },
  {
    name: 'member-2.jpg',
    size: '864x1152',
    prompt: `Editorial monochrome portrait photograph, distinguished man in profile looking thoughtfully away, elegant tailored attire, warm desaturated tones, soft light, luxury magazine editorial, anonymous contemplative mood, film grain, ${STYLE}`,
  },
  {
    name: 'member-3.jpg',
    size: '864x1152',
    prompt: `Editorial monochrome portrait photograph, elegant person seen from behind in a sophisticated setting, warm desaturated tones, soft ambient light, luxury magazine editorial, anonymous contemplative mood, film grain, ${STYLE}`,
  },
];

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function generateOne(zai: any, job: ImgJob): Promise<void> {
  const outPath = path.join(OUT_DIR, job.name);
  if (fs.existsSync(outPath)) {
    console.log(`[skip] ${job.name} already exists`);
    return;
  }
  let lastErr: any;
  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      const res = await zai.images.generations.create({
        prompt: job.prompt,
        size: job.size as any,
      });
      const b64 = res.data[0].base64;
      fs.writeFileSync(outPath, Buffer.from(b64, 'base64'));
      console.log(`[ok] ${job.name}`);
      return;
    } catch (e: any) {
      lastErr = e;
      const wait = 4000 * attempt;
      console.log(`[retry ${attempt}] ${job.name} in ${wait}ms`);
      await sleep(wait);
    }
  }
  throw lastErr;
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  const zai = await ZAI.create();
  const CONCURRENCY = 2;
  let idx = 0;
  const workers: Promise<void>[] = [];
  async function worker() {
    while (idx < jobs.length) {
      const cur = jobs[idx++];
      try {
        await generateOne(zai, cur);
      } catch (e: any) {
        console.error(`[fail] ${cur.name}: ${e.message}`);
      }
    }
  }
  for (let i = 0; i < CONCURRENCY; i++) workers.push(worker());
  await Promise.all(workers);
  console.log('ALL DONE');
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
