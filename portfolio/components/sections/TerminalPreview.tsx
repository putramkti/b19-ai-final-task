import { Icon } from "@/components/ui/Icon";
import { icons } from "@/lib/content";

const kw = "text-sky";
const plain = "text-ink-soft";
const type = "text-teal";
const str = "text-indigo";
const ident = "text-indigo-pale";
const comment = "text-ink-faint";

/**
 * Interactive terminal preview in the hero (Figma 2:46).
 * Copy, indentation, and syntax colours follow the frame exactly.
 */
export function TerminalPreview() {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-card border border-edge bg-panel shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3 border-b border-line bg-code-head px-4 pb-[13px] pt-3">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="size-3 rounded-full bg-ink-faint" />
          <span className="size-3 rounded-full bg-ink-faint/60" />
          <span className="size-3 rounded-full bg-ink-faint/40" />
        </div>

        <p className="truncate font-mono text-[13px]/[22px] text-ink-muted">
          alex-pratama.config.ts
        </p>

        <Icon icon={icons.copy} alt="" />
      </div>

      <div className="overflow-x-auto p-5">
        <pre className="type-code min-w-max">
          <code>
            <span className={kw}>import</span>
            <span className={plain}>{" { "}</span>
            <span className={type}>Developer</span>
            <span className={plain}>{" } "}</span>
            <span className={kw}>from</span>
            <span className={plain}> </span>
            <span className={str}>{"'@craft/engineer'"}</span>
            <span className={plain}>;</span>
            {"\n"}
            <span className={comment}>{"// Inisialisasi profil teknis"}</span>
            {"\n"}
            <span className={kw}>export const</span>
            <span className={plain}> </span>
            <span className={ident}>alex</span>
            <span className={plain}>{" = "}</span>
            <span className={kw}>new</span>
            <span className={plain}> </span>
            <span className={type}>Developer</span>
            <span className={plain}>({"{"}</span>
            {"\n"}
            <span className={plain}>
              {"  name: "}
              <span className={type}>{"'Alex Pratama'"}</span>
              {","}
            </span>
            {"\n"}
            <span className={plain}>
              {"  role: "}
              <span className={type}>{"'Full Stack Engineer & UI Designer'"}</span>
              {","}
            </span>
            {"\n"}
            <span className={plain}>
              {"  location: "}
              <span className={type}>{"'Jakarta, Indonesia (WIB)'"}</span>
              {","}
            </span>
            {"\n"}
            <span className={plain}>{"  focus: ["}</span>
            {"\n"}
            <span className={plain}>
              {"    'Scalable Web Architectures'"}
              <span className={str}>{","}</span>
            </span>
            {"\n"}
            <span className={plain}>
              {"    'Pixel-Perfect UI & Micro-interactions'"}
              <span className={str}>{","}</span>
            </span>
            {"\n"}
            <span className={plain}>{"    'High-Throughput APIs & Data Pipeline'"}</span>
            {"\n"}
            <span className={plain}>{"  ],"}</span>
            {"\n"}
            <span className={plain}>
              {"  status: "}
              <span className={type}>{"'Ready for ambitious challenges'"}</span>
              {","}
            </span>
            {"\n"}
            <span className={plain}>
              {"  getInTouch: () =>"}
              {"\n"}
              {"    "}
              <span className={kw}>window</span>
              {".open("}
              <span className={str}>{"'mailto:hello@alexpratama.dev'"}</span>
              {")"}
            </span>
            {"\n"}
            <span className={plain}>{"});"}</span>
          </code>
        </pre>

        <div className="mt-[13px] flex items-center gap-2 border-t border-line-soft pt-[13px]">
          <Icon icon={icons.terminalPrompt} alt="" />
          <p className="font-mono text-xs/[16px] whitespace-nowrap text-teal">
            {`$ git commit -m "feat: ship digital excellence"`}
          </p>
        </div>
      </div>
    </div>
  );
}