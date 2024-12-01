import { defineNuxtPlugin } from "#app";
import "@lion/ui/define/lion-input.js";
import "@lion/ui/define/lion-button.js";
import "@lion/ui/define/lion-input-email.js";
import "@lion/ui/define/lion-icon.js";
import { Required, IsEmail } from "@lion/ui/form-core.js";

export default defineNuxtPlugin(() => {
    return {
        provide: {
            lion: {
                Required,
                IsEmail
            }
        }
    };
});