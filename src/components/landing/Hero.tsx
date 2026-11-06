import { ArrowRight } from "lucide-react"
import ButtonLink from "../ui/ButtonLink"

export default function Hero() {
    return (
        <section className="flex flex-col items-center gap-6 text-center">
            <h1 className="max-w-2xl font-heading font-bold text-5xl tracking-[-0.02em]">
                One board for everything — or split it up however you want.
            </h1>
            <p className="max-w-md text-[15px] text-muted-text">
                apply-board keeps your job search in columns you can read at a glance. Drag an application from Applied to Interview to Offer, and keep separate searches on separate boards.
            </p>
            <div className="flex items-center gap-3">
                <ButtonLink href={'#'} variant="primary">Sign up</ButtonLink>
                <ButtonLink href={'#'} variant="secondary">
                    Try demo
                    <ArrowRight size={16} />
                </ButtonLink>
            </div>
            <p className="text-[12px] text-muted-text">The demo opens a sample board — no account needed.</p>
        </section>
    )
}
