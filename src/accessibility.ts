// Strict operational contract mapping accessibility parameters
interface AccessibilityEngine {
    currentScale: number;
    maxScale: number;
    minScale: number;
    dyslexicMode: boolean;
    scaleUp(): void;
    toggleDyslexia(): void;
}

export class UserAccessibilitySettings implements AccessibilityEngine {
    currentScale: number = 1.0;
    maxScale: number = 2.0;
    minScale: number = 0.8;
    dyslexicMode: boolean = false;

    scaleUp(): void {
        if (this.currentScale < this.maxScale) {
            this.currentScale += 0.1;
            document.body.style.fontSize = `${this.currentScale}rem`;
            console.log(`[High-Tech UI] Text scaled to factor: ${this.currentScale}`);
        }
    }

    toggleDyslexia(): void {
        this.dyslexicMode = !this.dyslexicMode;
        if (this.dyslexicMode) {
            document.body.style.fontFamily = "'OpenDyslexic', sans-serif";
        } else {
            document.body.style.fontFamily = "var(--font-foundry)";
        }
    }
}
