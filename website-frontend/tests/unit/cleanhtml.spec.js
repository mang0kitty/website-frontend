import { expect } from "chai";
import { CleanHTML } from "@/main.js";

describe("cleanhtml filter", () => {
  const cases = [
    {
      name: "plain text",
      html: "This is a test.",
      text: "This is a test.",
    },
    {
      name: "single HTML tag",
      html: "\u003ci\u003eThe Tattooist of Auschwitz\u003c/i\u003e",
      text: "The Tattooist of Auschwitz",
    },
    {
      name: "multiple HTML tags",
      html:
        "\u003cb\u003eThe #1 \u003ci\u003eNew York Times\u003c/i\u003e Bestseller \u003ci\u003eYou Are A Badass\u003c/i\u003e is the self-help book for people who desperately want to improve their lives but don't want to get busted doing it.",
      text:
        "The #1 New York Times Bestseller You Are A Badass is the self-help book for people who desperately want to improve their lives but don't want to get busted doing it.",
    },
  ];

  cases.forEach((testCase) => {
    describe(testCase.name, () => {
      it("it generates the correct text", () => {
        expect(CleanHTML(testCase.html)).to.eql(testCase.text);
      });
    });
  });
});
