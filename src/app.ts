// Importing our custom typed accessibility parameters from our companion file
import { UserAccessibilitySettings } from "./accessibility";

class TetAppEngine {
    private accessibilityModule: UserAccessibilitySettings;
    private activeView: string = "paper1";

    constructor() {
        this.accessibilityModule = new UserAccessibilitySettings();
    }

    public bootSystem(): void {
        console.log("🚀 RikMakersHub TET Engine initializing operations...");
        this.bindUserInterfaceControls();
    }

    private bindUserInterfaceControls(): void {
        // Wiring up your accessibility buttons natively
        const scaleBtn = document.getElementById("accessibility-scale-btn");
        if (scaleBtn) {
            scaleBtn.addEventListener("click", () => {
                this.accessibilityModule.scaleUp();
            });
        }

        const dyslexiaBtn = document.getElementById("accessibility-dyslexia-btn");
        if (dyslexiaBtn) {
            document.body.classList.add("smooth-transitions");
            dyslexiaBtn.addEventListener("click", () => {
                this.accessibilityModule.toggleDyslexia();
            });
        }
        
        console.log("🎯 Native event handlers bound to DOM structure.");
    }
}

// Initializing the application context safely on boot load
window.addEventListener("DOMContentLoaded", () => {
    const mainInstance = new TetAppEngine();
    mainInstance.bootSystem();
});
