import ButtonLink from "../ui/ButtonLink";

export default function Footer() {
    return (
        <footer className="border-t border-border">
            <div className="flex justify-between items-center max-w-[1240px] mx-auto py-4">
                <p className="text-sm text-muted-text">© 2026 apply-board</p>
                <ButtonLink href={'#'} size="sm">Source on GitHub</ButtonLink>
            </div>
        </footer>
    )
}