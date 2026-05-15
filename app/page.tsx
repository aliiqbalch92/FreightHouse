"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
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
  ["Broker Negotiation", "We negotiate directly with brokers to secure top-paying freight rates for your business.", Route],
  ["Paperwork Management", "Rate confirmations, invoicing, compliance, and documentation handled professionally.", Boxes],
  ["Weekly Revenue Reporting", "Clear earning summaries and operational visibility to help track fleet performance.", ChartNoAxesCombined],
  ["Fuel Advance & Swift Payments", "Payment coordination and fuel advance assistance built to improve cash flow stability.", Gauge],
  ["Reduced Downtime", "Strategic load planning and continuous dispatching designed to minimize idle truck hours.", Warehouse],
];

const benefits = [
  ["Profitable hauling", "Maximize loaded miles and increase operational profitability."],
  ["Reliable dispatch team", "Experienced specialists managing freight operations with precision and consistency."],
  ["3,000+ network", "Access to a trusted broker and carrier network across the United States."],
  ["Flexible pricing", "Flat-rate and percentage-based dispatch options tailored to carrier preferences."],
];

const equipment = [
  ["Reefer", "Temperature-controlled freight dispatch for refrigerated loads."],
  ["Flatbed", "Reliable dispatching for open-deck and heavy-haul freight."],
  ["Step Deck", "Specialized support for taller and oversized loads."],
  ["Power Only", "Dispatch support for carriers moving trailers without owned equipment."],
  ["Dry Van", "Consistent freight opportunities for enclosed trailer operations."],
  ["Box Truck", "Local and regional dispatch support for box truck carriers."],
];

const operations = [
  ["Load Board Searches", "Eliminated"],
  ["Broker Negotiation", "Handled"],
  ["Fleet Movement", "Continuous"],
  ["Paperwork", "Managed"],
  ["Revenue Reports", "Weekly"],
  ["Support", "24/7"],
];

const proofPoints = [
  ["24/7 Support", "Dispatch coverage while your trucks keep moving."],
  ["Top-Paying Freight", "Rate-focused load selection built around carrier margin."],
  ["Minimal Downtime", "Continuous planning to reduce idle hours between loads."],
  ["Reliable Dispatching", "Consistent coordination across brokers, routes, and paperwork."],
];

function TruckIllustration() {
  return (
    <>
      <img
        className="truck-image"
        src="/assets/freight-house-truck-optimized.png"
        alt=""
        aria-hidden="true"
        draggable={false}
      />
      <span className="truck-wheel truck-wheel-a" />
      <span className="truck-wheel truck-wheel-b" />
      <span className="truck-wheel truck-wheel-c" />
      <span className="truck-wheel truck-wheel-d" />
    </>
  );
}

function JourneyRig() {
  const trees = Array.from({ length: 18 }, (_, index) => index);
  const palms = Array.from({ length: 8 }, (_, index) => index);
  const buildings = Array.from({ length: 12 }, (_, index) => index);
  const homes = Array.from({ length: 9 }, (_, index) => index);
  const lamps = Array.from({ length: 10 }, (_, index) => index);
  const containers = Array.from({ length: 12 }, (_, index) => index);
  const docks = Array.from({ length: 8 }, (_, index) => index);
  const terminalTrucks = Array.from({ length: 6 }, (_, index) => index);

  return (
    <div className="journey-rig" aria-hidden="true">
      <div className="sky-layer sky-day" id="skyDay" />
      <div className="sky-layer sky-noon" id="skyNoon" />
      <div className="sky-layer sky-sunset" id="skySunset" />
      <div className="sky-layer sky-night" id="skyNight" />
      <div className="sun-glow" id="sunGlow" />
      <div className="highway-horizon" />
      <div className="environment-layer env-trees" id="envTrees">
        <div className="tree-line tree-line-left">
          {trees.map((tree) => (
            <span key={`left-tree-${tree}`} style={{ "--i": tree } as CSSProperties} />
          ))}
        </div>
        <div className="tree-line tree-line-right">
          {trees.map((tree) => (
            <span key={`right-tree-${tree}`} style={{ "--i": tree } as CSSProperties} />
          ))}
        </div>
      </div>
      <div className="environment-layer env-industrial" id="envIndustrial">
        <div className="warehouse-row">
          <span className="warehouse-main" />
          <span className="warehouse-annex" />
          <span className="warehouse-lights" />
        </div>
        <div className="container-stack">
          {containers.map((container) => (
            <span key={`container-${container}`} style={{ "--i": container } as CSSProperties} />
          ))}
        </div>
        <div className="dock-row">
          {docks.map((dock) => (
            <span key={`dock-${dock}`} style={{ "--i": dock } as CSSProperties} />
          ))}
        </div>
      </div>
      <div className="environment-layer env-coast" id="envCoast">
        <div className="ocean-strip" />
        <div className="sand-strip" />
        <div className="palm-line">
          {palms.map((palm) => (
            <span key={`palm-${palm}`} style={{ "--i": palm } as CSSProperties} />
          ))}
        </div>
      </div>
      <div className="environment-layer env-city" id="envCity">
        <div className="city-line">
          {buildings.map((building) => (
            <span key={`building-${building}`} style={{ "--i": building } as CSSProperties} />
          ))}
        </div>
      </div>
      <div className="environment-layer env-suburb" id="envSuburb">
        <div className="home-line">
          {homes.map((home) => (
            <span key={`home-${home}`} style={{ "--i": home } as CSSProperties} />
          ))}
        </div>
      </div>
      <div className="environment-layer env-mountain" id="envMountain">
        <div className="mountain-range" />
        <div className="pine-line" />
        <div className="road-sign sign-one">I-70</div>
        <div className="road-sign sign-two">WEST</div>
      </div>
      <div className="environment-layer env-terminal" id="envTerminal">
        <div className="terminal-warehouse">
          <div className="dock-numbers">
            {docks.map((dock) => (
              <span key={`dock-number-${dock}`}>{String(dock + 1).padStart(2, "0")}</span>
            ))}
          </div>
        </div>
        <div className="terminal-containers" />
        <div className="parked-trucks">
          {terminalTrucks.map((truck) => (
            <span key={`terminal-truck-${truck}`} style={{ "--i": truck } as CSSProperties} />
          ))}
        </div>
        <div className="lamp-line">
          {lamps.map((lamp) => (
            <span key={`lamp-${lamp}`} style={{ "--i": lamp } as CSSProperties} />
          ))}
        </div>
      </div>
      <div className="road-layer">
        <span className="road-shoulder road-shoulder-left" />
        <span className="road-shoulder road-shoulder-right" />
        <span className="lane-line lane-line-a" />
        <span className="lane-line lane-line-b" />
        <span className="lane-line lane-line-c" />
      </div>
      <div className="speed-lines" />
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
        Freight House
      </a>
      <nav>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="nav-cta" href="#contact">
        Start Dispatching
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
        <p>Freight House Logistics</p>
        <h1>Freight dispatch built for carrier profitability.</h1>
        <span className="hero-subcopy">
          24/7 dispatch operations engineered to keep your trucks moving, maximize revenue,
          reduce downtime, and eliminate broker negotiation headaches.
        </span>
        <div className="hero-meta">
          <a href="#contact">Start Dispatching</a>
          <a href="#contact">Request Consultation</a>
        </div>
      </motion.div>
      <div className="scroll-cue">Scroll to move your fleet</div>
    </section>
  );
}

function StorySection() {
  const lines = [
    "Dispatching without downtime.",
    "Higher-paying loads. Better margins.",
    "Operational precision for modern trucking.",
    "Keeping America’s trucks moving.",
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
    <section className="tech-section" id="about">
      <div className="node-map">
        {Array.from({ length: 26 }).map((_, index) => (
          <span key={index} style={{ "--x": `${8 + ((index * 31) % 84)}%`, "--y": `${12 + ((index * 47) % 76)}%` } as CSSProperties} />
        ))}
        <svg viewBox="0 0 1000 500" preserveAspectRatio="none">
          <path d="M70 330 C230 190 310 410 472 252 S760 110 930 214" />
          <path d="M90 120 C280 270 415 70 565 188 S758 392 900 310" />
          <path d="M190 430 C340 320 470 360 594 236 S720 92 850 72" />
        </svg>
      </div>
      <div className="tech-copy">
        <p>Dispatching beyond expectations</p>
        <h2>We operate as your dedicated logistics partner.</h2>
        <span>
          At Freight House Logistics, we do more than simply dispatch loads. We maximize
          carrier profitability, minimize downtime, and streamline day-to-day trucking operations.
        </span>
        <div className="about-points">
          <b>No endless load board searches.</b>
          <b>No wasted hours negotiating rates.</b>
          <b>No operational stress.</b>
        </div>
      </div>
    </section>
  );
}

function EditorialSection() {
  return (
    <section className="editorial">
      <div className="editorial-layout">
        <div className="editorial-copy">
          <p>Built around carrier success.</p>
          <h2>Dispatch operations engineered for <em>profit</em>.</h2>
        </div>
        <div className="operations-panel">
          {operations.map(([label, status]) => (
            <div className="operation-card" key={label}>
              <span>{label}</span>
              <b>{status}</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OperatingSystemSection() {
  return (
    <section className="os-section">
      <div className="os-grid" />
      <div className="os-copy">
        <p>Freight House operating layer</p>
        <h2>Performance signals for profitable movement.</h2>
      </div>
      <div className="os-letters" aria-hidden="true">
        <span>F</span>
        <span>H</span>
        <span>O</span>
        <span>S</span>
      </div>
      <div className="os-proof">
        {proofPoints.map(([title, copy]) => (
          <article key={title}>
            <b>{title}</b>
            <span>{copy}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="section-kicker">Carrier support</div>
      <h2>Operational support designed for carriers.</h2>
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
        <p>Broker and carrier network</p>
        <h2>Strong freight coordination across the United States.</h2>
        <span>Access to a trusted network of over 3,000 brokers and carriers, coordinated for profitable movement.</span>
      </div>
    </section>
  );
}

function PlatformSection() {
  const rows = ["Reefer -> Booked", "Flatbed -> Negotiating", "Dry Van -> Loaded", "Power Only -> Clear"];
  return (
    <section className="platform" id="platform">
      <div className="yard-overhead" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, index) => (
          <span key={index} style={{ "--i": index } as CSSProperties} />
        ))}
      </div>
      <div className="platform-copy">
        <p>Real-time trucking operations</p>
        <h2>Route coordination, load planning, and paperwork without the friction.</h2>
        <span>From broker negotiations and paperwork management to route coordination and load planning, Freight House works around the clock to keep your fleet running efficiently.</span>
      </div>
      <div className="dashboard">
        <div className="dash-top">
          <span>Freight House Dispatch</span>
          <b>24/7 coverage</b>
        </div>
        <div className="dash-main">
          <div className="metric"><Gauge /> Downtime focus <strong>Low</strong></div>
          <div className="metric"><Satellite /> Network reach <strong>3k+</strong></div>
          <div className="metric"><ChartNoAxesCombined /> Reporting <strong>Weekly</strong></div>
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
      <p className="section-kicker">Equipment we dispatch</p>
      <h2>Built for the equipment carriers run every day.</h2>
      <div>
        {equipment.map(([name, description]) => (
          <article className="equipment-card" key={name}>
            <div className="equipment-visual" data-equipment={name}>
              <span />
            </div>
            <h3>{name}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta terminal-footer" id="contact">
      <div className="cta-copy">
        <p>Let’s move your fleet forward</p>
        <h2>Dispatch engineered for profitability.</h2>
        <div className="contact-grid">
          <span>Office <b>Overland Park, Kansas 66212</b></span>
          <span>Email <b>Freighthouse.KS@gmail.com</b></span>
          <span>Phone <b>+1 (913) 386-5580</b></span>
        </div>
        <div className="cta-actions">
          <a href="mailto:Freighthouse.KS@gmail.com">Start Dispatching <ArrowRight size={18} /></a>
          <a href="tel:+19133865580">Request Consultation</a>
        </div>
      </div>
      <footer className="footer-grid">
        <div>
          <a className="footer-brand" href="#top"><span />Freight House</a>
          <b>Overland Park, Kansas</b>
        </div>
        <div>
          <p>Product</p>
          <a href="#services">Dispatch assistance</a>
          <a href="#platform">Revenue visibility</a>
          <a href="#about">Carrier operations</a>
        </div>
        <div>
          <p>Company</p>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <p>Find us</p>
          <a href="mailto:Freighthouse.KS@gmail.com">Freighthouse.KS@gmail.com</a>
          <a href="tel:+19133865580">+1 (913) 386-5580</a>
        </div>
      </footer>
    </section>
  );
}

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.18, smoothWheel: true, lerp: 0.08 });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    const ctx = gsap.context(() => {
      const mobile = window.innerWidth < 760;
      const start = mobile
        ? { left: "50%", bottom: "15vh", scale: 0.94 }
        : { left: "50%", bottom: "-17vh", scale: 0.96 };
      const points = mobile
        ? [
            { left: "50.5%", bottom: "15vh", scale: 0.94 },
            { left: "51%", bottom: "15.2vh", scale: 0.93 },
            { left: "51.5%", bottom: "15.4vh", scale: 0.92 },
            { left: "52%", bottom: "15.2vh", scale: 0.91 },
            { left: "52.5%", bottom: "15vh", scale: 0.9 },
            { left: "53%", bottom: "14.8vh", scale: 0.9 },
          ]
        : [
            { left: "50.5%", bottom: "-17vh", scale: 0.96 },
            { left: "51%", bottom: "-16.5vh", scale: 0.95 },
            { left: "51.5%", bottom: "-16.5vh", scale: 0.94 },
            { left: "52%", bottom: "-17vh", scale: 0.93 },
            { left: "52.5%", bottom: "-17.5vh", scale: 0.92 },
            { left: "53%", bottom: "-17.5vh", scale: 0.92 },
          ];

      gsap.set("#truckRig", { xPercent: -50, yPercent: 0, top: "auto", ...start, rotate: 0 });
      let wheelRotation = 0;
      gsap.set(["#skyNoon", "#skySunset", "#skyNight"], { opacity: 0 });
      gsap.set(
        ["#envTrees", "#envIndustrial", "#envCity", "#envSuburb", "#envCoast", "#envMountain", "#envTerminal"],
        { opacity: 0 },
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.1,
          onUpdate: (self) => {
            const velocity = Math.abs(self.getVelocity());
            wheelRotation += self.direction * Math.min(velocity / 18, 28);
            gsap.set(".truck-wheel", {
              rotation: wheelRotation,
              transformOrigin: "50% 50%",
            });
          },
        },
      });

      tl.to("#truckRig", { ...points[0], duration: 1.1, ease: "none" }, 0)
        .to("#envTrees", { opacity: 1, duration: 0.55, ease: "none" }, 0.18)
        .to("#skyNoon", { opacity: 1, duration: 1.1, ease: "none" }, 0.45)
        .to("#sunGlow", { left: "68%", top: "21%", scale: 1.26, duration: 1.25, ease: "none" }, 0.45)
        .to("#truckRig", { ...points[1], duration: 1.1, ease: "none" }, 1.1)
        .to("#envTrees", { opacity: 0, duration: 0.42, ease: "none" }, 1.05)
        .to("#envIndustrial", { opacity: 1, duration: 0.55, ease: "none" }, 1.15)
        .to("#truckRig", { ...points[2], duration: 1.1, ease: "none" }, 2.2)
        .to("#envIndustrial", { opacity: 0, duration: 0.42, ease: "none" }, 2.05)
        .to("#envCity", { opacity: 1, duration: 0.55, ease: "none" }, 2.15)
        .to("#truckRig", { ...points[3], duration: 1.1, ease: "none" }, 3.3)
        .to("#envCity", { opacity: 0, duration: 0.42, ease: "none" }, 3.05)
        .to("#envSuburb", { opacity: 1, duration: 0.55, ease: "none" }, 3.15)
        .to("#skySunset", { opacity: 1, duration: 1.1, ease: "none" }, 3.25)
        .to("#truckRig", { ...points[4], duration: 1.1, ease: "none" }, 4.4)
        .to("#envSuburb", { opacity: 0, duration: 0.42, ease: "none" }, 4.05)
        .to("#envCoast", { opacity: 1, duration: 0.55, ease: "none" }, 4.15)
        .to("#envCoast", { opacity: 0, duration: 0.42, ease: "none" }, 4.95)
        .to("#envMountain", { opacity: 1, duration: 0.55, ease: "none" }, 5.0)
        .to("#sunGlow", { left: "78%", top: "34%", opacity: 0.52, scale: 0.92, duration: 1.1, ease: "none" }, 4.35)
        .to("#truckRig", { ...points[5], duration: 1.2, ease: "none" }, 5.5)
        .to("#skyNight", { opacity: 1, duration: 1.1, ease: "none" }, 5.35)
        .to("#envMountain", { opacity: 0, duration: 0.42, ease: "none" }, 5.45)
        .to("#envTerminal", { opacity: 1, duration: 0.7, ease: "none" }, 5.55)
        .to("#truckRig", { left: mobile ? "52%" : "51.5%", bottom: mobile ? "15.5vh" : "-17.5vh", scale: mobile ? 0.86 : 0.88, duration: 0.85, ease: "none" }, 6.25)
        .to("#sunGlow", { opacity: 0.12, scale: 0.7, duration: 0.9, ease: "none" }, 5.65);

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
        endTrigger: ".trust",
        end: "bottom bottom",
        toggleClass: { targets: ".journey-rig", className: "is-receded" },
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => {
      ctx.revert();
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <main ref={rootRef}>
      <Nav />
      <JourneyRig />
      <Hero />
      <EditorialSection />
      <OperatingSystemSection />
      <StorySection />
      <TechSection />
      <ServicesSection />
      <PlatformSection />
      <NetworkSection />
      <BenefitsSection />
      <TrustSection />
      <FinalCta />
    </main>
  );
}
