/** @type {import('stylelint').Config} */
module.exports = {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    // Разрешаем PascalCase для CSS Modules (.AppLink)
    "selector-class-pattern": null,
    
    // Разрешаем расширения .scss в @use
    "scss/load-partial-extension": null,
    
    // Отключаем пустые строки перед объявлениями
    "declaration-empty-line-before": null,
    "custom-property-empty-line-before": null,
    
    // Разрешаем традиционную нотацию цветов (rgb(), rgba())
    "color-function-notation": "legacy",
    
    // Разрешаем заглавные буквы в значениях (Consolas, Serif)
    "value-keyword-case": null,
  },
};