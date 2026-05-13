"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  ArrowRight,
  Boxes,
  ChartNoAxesCombined,
  CircleDot,
  Gauge,
  Globe2,
  Network,
  Radar,
  Route,
  Satellite,
  ShieldCheck,
  Truck,
  Warehouse,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services: Array<[string, string, LucideIcon]> = [
  ["24/7 Dispatch Assistance", "Dedicated dispatch support available around the clock to keep your trucks loaded and operational.", Truck],
  ["Logistics Coordination", "Strategic load planning and continuous dispatching designed to minimize idle truck hours", Route],
  ["Carrier Network", "We negotiate directly with brokers to secure top-paying freight rates for your business.", Network],
  ["Weekly Revenue Reporting", "Clear earning summaries and operational visibility to help track fleet performance.", Radar],
  ["Truckload Solutions", "Rate confirmations, invoicing, compliance, and documentation handled professionally and efficiently.", Boxes],
  ["Fuel Advance & Swift Payments", "Optimized payment coordination and fuel advance assistance to improve cash flow stability.", Warehouse],
];

const benefits = [
  ["Flexible Pricing Structure", "Competitive flat rates and percentage-based dispatch options tailored to carrier preferences."],
  ["Efficient & Profitable Hauling", "We focus on maximizing loaded miles and increasing operational profitability."],
  ["Reliable Dispatch Team", "Experienced dispatch specialists managing freight operations with precision and consistency.."],
  ["Strong Broker & Carrier Network", "Access to a trusted network of over 3,000 brokers and carriers across the United States."],
];

function TruckIllustration() {
  return (
    <svg className="truck-svg" viewBox="0 0 900 360" aria-hidden="true">
      <defs>
        <linearGradient id="cab" x1="0" x2="1">
          <stop offset="0" stopColor="#f7fbf8" />
          <stop offset="0.45" stopColor="#b7c0bd" />
          <stop offset="1" stopColor="#59615f" />
        </linearGradient>
        <linearGradient id="trailer" x1="0" x2="1">
          <stop offset="0" stopColor="#202729" />
          <stop offset="0.5" stopColor="#3f4947" />
          <stop offset="1" stopColor="#151a1b" />
        </linearGradient>
        <filter id="truckGlow" x="-20%" y="-40%" width="140%" height="180%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="0 0 0 0 0.5 0 0 0 0 1 0 0 0 0 0.72 0 0 0 .5 0"
          />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g className="truck-shadow">
        <ellipse cx="458" cy="298" rx="330" ry="34" fill="#000" opacity=".5" />
      </g>
      <g className="truck-body">
        <rect x="65" y="95" width="520" height="138" rx="8" fill="url(#trailer)" />
        <path d="M585 126h103l80 78v29H585z" fill="url(#cab)" />
        <path d="M646 139h39l48 49h-87z" fill="#0d1213" opacity=".82" />
        <path d="M97 116h452M96 149h453M96 183h453M96 215h452" stroke="#78827f" strokeOpacity=".25" />
        <path d="M105 103h432" stroke="#fff" strokeOpacity=".22" strokeWidth="3" />
        <path d="M610 233h165" stroke="#9affc7" strokeWidth="3" strokeLinecap="round" opacity=".7" />
        <circle cx="180" cy="250" r="38" fill="#080a0b" />
        <circle cx="180" cy="250" r="18" fill="#59615f" />
        <circle cx="512" cy="250" r="38" fill="#080a0b" />
        <circle cx="512" cy="250" r="18" fill="#59615f" />
        <circle cx="673" cy="250" r="38" fill="#080a0b" />
        <circle cx="673" cy="250" r="18" fill="#59615f" />
        <path d="M770 210l37 10" stroke="#eafff4" strokeWidth="8" strokeLinecap="round" />
        <path className="wire" d="M65 95h520l103 31 80 78v29H65zM646 139h39l48 49h-87zM96 149h453M96 183h453M180 250h493" />
      </g>
    </svg>
  );
}

function JourneyRig() {
  return (
    <div className="journey-rig" aria-hidden="true">
      <div className="scene-grid" />
      <div className="road-perspective">
        <span />
        <span />
        <span />
      </div>
      <div className="scan-field">
        {Array.from({ length: 18 }).map((_, index) => (
          <i key={index} style={{ "--i": index } as React.CSSProperties} />
        ))}
      </div>
      <div className="truck-wrap" id="truckRig">
        <TruckIllustration />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="nav">
      <a className="brand" href="#top">
        <span />
        FreightOS
      </a>
      <nav>
        <a href="#network">Network</a>
        <a href="#platform">Platform</a>
        <a href="#services">Services</a>
      </nav>
      <a className="nav-cta" href="#contact">
        Get a Quote
      </a>
    </header>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.1], [0, 120]);
  return (
    <section className="hero" id="top">
      <div className="hero-image" />
      <div className="light-sweep" />
      <motion.div className="hero-copy" style={{ y }}>
        <p>Modern freight movement</p>
        <h1>Freight infrastructure for the modern world.</h1>
        <div className="hero-meta">
          <span>Brokerage</span>
          <span>Visibility</span>
          <span>Carrier operations</span>
        </div>
      </motion.div>
      <div className="scroll-cue">Scroll to move freight</div>
    </section>
  );
}

function StorySection() {
  const lines = [
    "Every route connected.",
    "From warehouse to highway.",
    "Built for operational precision.",
    "Freight at enterprise scale.",
  ];
  return (
    <section className="story" id="journey">
      {lines.map((line, index) => (
        <div className="story-panel" key={line}>
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.65 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {line}
          </motion.h2>
          <span>0{index + 1}</span>
        </div>
      ))}
    </section>
  );
}

function TechSection() {
  return (
    <section className="tech-section">
      <div className="node-map">
        {Array.from({ length: 26 }).map((_, index) => (
          <span key={index} style={{ "--x": `${8 + ((index * 31) % 84)}%`, "--y": `${12 + ((index * 47) % 76)}%` } as React.CSSProperties} />
        ))}
        <svg viewBox="0 0 1000 500" preserveAspectRatio="none">
          <path d="M70 330 C230 190 310 410 472 252 S760 110 930 214" />
          <path d="M90 120 C280 270 415 70 565 188 S758 392 900 310" />
          <path d="M190 430 C340 320 470 360 594 236 S720 92 850 72" />
        </svg>
      </div>
      <div className="tech-copy">
        <p>Logistics operating system</p>
        <h2>Real-time freight intelligence across every route.</h2>
        <span>
          Connected dispatch, carrier capacity, shipment milestones, and exception response in one
          operational layer.
        </span>
      </div>
    </section>
  );
}

function EditorialSection() {
  return (
    <section className="editorial">
      <p>Modern freight should not feel fragmented.</p>
      <h2>Imagine freight operating as one connected intelligent system.</h2>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="section-kicker">Capabilities</div>
      <h2>Operational services, rebuilt for precision.</h2>
      <div className="service-grid">
        {services.map(([title, copy, Icon], index) => (
          <motion.article
            className="service-card"
            key={title as string}
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.35, once: true }}
            transition={{ duration: 0.55, delay: index * 0.04 }}
          >
            <Icon size={22} strokeWidth={1.5} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function NetworkSection() {
  return (
    <section className="network-section" id="network">
      <div className="world-grid">
        <svg viewBox="0 0 1200 620">
          <path d="M120 390C270 190 390 270 520 330S750 460 1050 180" />
          <path d="M170 210C360 380 505 160 642 250S835 450 1040 330" />
          <path d="M270 500C430 390 575 430 710 300S875 138 1090 130" />
          {[
            [120, 390],
            [520, 330],
            [1050, 180],
            [170, 210],
            [642, 250],
            [1040, 330],
            [270, 500],
            [710, 300],
            [1090, 130],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7" />
          ))}
        </svg>
      </div>
      <div className="network-copy">
        <p>Network</p>
        <h2>Connected freight network built for scale.</h2>
        <span>Brokerage, capacity, coordination, and shipment visibility across moving markets.</span>
      </div>
    </section>
  );
}

function PlatformSection() {
  const rows = ["ORD -> DFW", "LAX -> PHX", "ATL -> MIA", "SEA -> DEN"];
  return (
    <section className="platform" id="platform">
      <div className="platform-copy">
        <p>Platform</p>
        <h2>Route intelligence for freight teams that cannot wait.</h2>
        <span>Monitor every shipment signal, lane condition, and carrier event from a control surface built for operators.</span>
      </div>
      <div className="dashboard">
        <div className="dash-top">
          <span>Operations Command</span>
          <b>98.7% on-track</b>
        </div>
        <div className="dash-main">
          <div className="metric"><Gauge /> Dock dwell <strong>18m</strong></div>
          <div className="metric"><Satellite /> Live routes <strong>742</strong></div>
          <div className="metric"><ChartNoAxesCombined /> Cost variance <strong>-6.4%</strong></div>
        </div>
        <div className="lane-list">
          {rows.map((row, index) => (
            <div key={row}>
              <CircleDot size={14} />
              <span>{row}</span>
              <i style={{ width: `${56 + index * 10}%` }} />
              <b>{index === 1 ? "Watch" : "Clear"}</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="benefits">
      {benefits.map(([title, copy], index) => (
        <motion.article
          key={title}
          className="benefit-panel"
          initial={{ opacity: 0.2, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.45 }}
          transition={{ duration: 0.7 }}
        >
          <span>0{index + 1}</span>
          <h3>{title}</h3>
          <p>{copy}</p>
        </motion.article>
      ))}
    </section>
  );
}

function TrustSection() {
  return (
    <section className="trust">
      <h2>Trusted by companies moving modern commerce.</h2>
      <div>
        {["NORTHSTAR", "VECTOR", "IRONLINE", "CIVIC", "MERIDIAN", "AXIS"].map((logo) => (
          <span key={logo}>{logo}</span>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta" id="contact">
      <div className="hero-image" />
      <div className="cta-copy">
        <p>Destination reached</p>
        <h2>The future of freight starts here.</h2>
        <div className="cta-actions">
          <a href="mailto:ops@example.com">Get a Quote <ArrowRight size={18} /></a>
          <a href="mailto:ops@example.com">Contact Us</a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.18, smoothWheel: true, lerp: 0.08 });
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      gsap.set("#truckRig", { xPercent: -58, yPercent: -50, left: "18%", top: "66%", scale: 0.92, rotate: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.1,
        },
      });

      tl.to("#truckRig", { left: "52%", top: "67%", scale: 1.04, duration: 1.1, ease: "none" })
        .to("#truckRig", { left: "78%", top: "58%", scale: 0.8, rotate: -2, duration: 1.1, ease: "none" })
        .to("#truckRig", { left: "50%", top: "48%", scale: 0.46, rotate: 90, duration: 1, ease: "none" })
        .to("#truckRig", { left: "15%", top: "48%", scale: 0.86, rotate: 0, duration: 1.1, ease: "none" })
        .to("#truckRig", { left: "62%", top: "50%", scale: 0.72, rotate: 0, duration: 0.8, ease: "none" })
        .to("#truckRig", { left: "52%", top: "36%", scale: 0.58, rotate: 0, duration: 0.75, ease: "none" })
        .to("#truckRig", { left: "18%", top: "78%", scale: 0.48, rotate: 0, duration: 0.7, ease: "none" })
        .to("#truckRig", { left: "72%", top: "70%", scale: 0.78, rotate: 0, duration: 1, ease: "none" });

      ScrollTrigger.create({
        trigger: ".tech-section",
        start: "top 65%",
        end: "bottom 40%",
        toggleClass: { targets: ".journey-rig", className: "is-wireframe" },
      });

      ScrollTrigger.create({
        trigger: ".editorial",
        start: "top 70%",
        end: "bottom 20%",
        toggleClass: { targets: ".journey-rig", className: "is-light" },
      });

      ScrollTrigger.create({
        trigger: ".services",
        start: "top 50%",
        end: ".trust bottom",
        toggleClass: { targets: ".journey-rig", className: "is-receded" },
      });
    }, rootRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <main ref={rootRef}>
      <Nav />
      <JourneyRig />
      <Hero />
      <StorySection />
      <TechSection />
      <EditorialSection />
      <ServicesSection />
      <NetworkSection />
      <PlatformSection />
      <BenefitsSection />
      <TrustSection />
      <FinalCta />
    </main>
  );
}
