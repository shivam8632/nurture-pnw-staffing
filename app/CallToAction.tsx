interface ButtonProps {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary';
}

interface CallToActionProps {
    title: string;
    description: string;
    buttons: ButtonProps[];
}

export default function CallToAction({ title, description, buttons }: CallToActionProps) {
    return (
        <section className="text-center py-16 bg-[#033c7b]/5 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">{title}</h2>
            <p className="text-lg text-zinc-600 mb-6">
                {description}
            </p>
            <div className="space-x-4">
                {buttons.map((button, index) => (
                    <a
                        key={index}
                        href={button.href}
                        className={`inline-flex items-center px-6 py-3 border text-base font-medium rounded-md ${button.variant === 'secondary'
                            ? 'border-[#10b981] text-[#10b981] bg-white hover:bg-[#10b981]/5'
                            : 'border-transparent text-white bg-[#033c7b] hover:bg-[#033c7b]/90'
                            }`}
                    >
                        {button.text}
                    </a>
                ))}
            </div>
        </section>
    );
}