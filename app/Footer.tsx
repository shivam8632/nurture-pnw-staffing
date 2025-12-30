import { Button } from "@/components/ui/button"

export default function Footer() {
    return (
        <footer className="bg-white border-t border-zinc-200 py-8">
            <div className="mx-auto px-4 md:px-6 lg:px-20 text-center space-y-4">
                <p className="text-zinc-600 text-lg font-medium">Nurture PNW Staffing - Care Starts With People</p>
                <div className="flex justify-center items-center space-x-4">
                    <span className="text-zinc-600">Phone:</span>
                    <Button variant="outline" asChild>
                        <a href="tel:206-697-4413" className="text-zinc-700 hover:text-black">
                            206-697-4413
                        </a>
                    </Button>
                </div>
            </div>
        </footer>
    );
}