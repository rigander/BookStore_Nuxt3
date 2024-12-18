import { defineRule } from "vee-validate";
import { all as rules } from '@vee-validate/rules';

export default defineNuxtPlugin((nuxtApp) => {
    Object.keys(rules)
        .filter((k) => k !== "default")
        .forEach((rule) => {
            defineRule(rule, rules[rule]);
    });
});