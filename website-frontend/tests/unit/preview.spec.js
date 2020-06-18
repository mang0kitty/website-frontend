import { expect } from "chai";
import { GetPreview } from "@/main.js";

describe("preview filter", () => {
  const cases = [
    {
      name: "with a single sentence",
      text: "This is a test.",
      preview: "This is a test.",
    },
    {
      name: "with multiple sentences",
      text: "This is a test. Another test. One more test. A last test.",
      preview: "This is a test. Another test. One more test.",
    },
    {
      name: "with a single sentence and quotes",
      text: "'This is a test.'",
      preview: "'This is a test.'",
    },
    {
      name: "with multiple sentences and quotes",
      text:
        "'This is a test.' -- Barack Obama. Another test. One more test. A last test.",
      preview:
        "'This is a test.' -- Barack Obama. Another test. One more test.",
    },
    {
      name: "with a practical example",
      text: `'Her highly personal and reflective memoir . . . is a must-read for anyone who cares about our role in a changing world.' —President Barack Obama. An intimate, powerful, and galvanizing memoir by Pulitzer Prize winner, human rights advocate, and former UN Ambassador Samantha Power.In her memoir, Power offers an urgent response to the question "What can one person do?" and a call for a clearer eye, a kinder heart, and a more open and civil hand in our politics and daily lives. The Education of an Idealist traces Power’s distinctly American journey from immigrant to war correspondent to presidential Cabinet official. In 2005, her critiques of US foreign policy caught the eye of newly elected senator Barack Obama, who invited her to work with him on Capitol Hill and then on his presidential campaign. After Obama was elected president, Power went from being an activist outsider to a government insider, navigating the halls of power while trying to put her ideals into practice. She served for four years as Obama’s human rights adviser, and in 2013, he named her US Ambassador to the United Nations, the youngest American to assume the role.Power transports us from her childhood in Dublin to the streets of war-torn Bosnia to the White House Situation Room and the world of high-stakes diplomacy. Humorous and deeply honest, The Education of an Idealist lays bare the searing battles and defining moments of her life and shows how she juggled the demands of a 24/7 national security job with the challenge of raising two young children. Along the way, she illuminates the intricacies of politics and geopolitics, reminding us how the United States can lead in the world, and why we each have the opportunity to advance the cause of human dignity. Power’s memoir is an unforgettable account of the power of idealism and of one person’s fierce determination to make a difference.“This is a wonderful book. […] The interweaving of Power’s personal story, family story, diplomatic history and moral arguments is executed seamlessly and with unblinking honesty.”—THOMAS L. FRIEDMAN, The New York Times Book Review “Honest, personal, revealing… about the development of a young woman’s inner strength and self-knowledge.”—COLM TÓIBÍN, author of Brooklyn and Nora Webster“Truly engrossing.”—RACHEL MADDOW`,
      preview: `'Her highly personal and reflective memoir . . . is a must-read for anyone who cares about our role in a changing world.' —President Barack Obama. An intimate, powerful, and galvanizing memoir by Pulitzer Prize winner, human rights advocate, and former UN Ambassador Samantha Power.In her memoir, Power offers an urgent response to the question "What can one person do?" and a call for a clearer eye, a kinder heart, and a more open and civil hand in our politics and daily lives.`,
    },
  ];

  cases.forEach((testCase) => {
    describe(testCase.name, () => {
      it("it generates the correct preview", () => {
        expect(GetPreview(testCase.text)).to.eql(testCase.preview);
      });
    });
  });
});
