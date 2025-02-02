import { getRegexPredicate } from "./stringUtil";

describe("regular expression", () => {
    it("should generate the right predicate for valid regular expressions", () => {
        let pred = getRegexPredicate("summa*");
        expect(pred("Summary")).toBeTruthy();
        expect(pred("summary")).toBeTruthy();
        expect(pred("sumary")).toBeFalsy();

        pred = getRegexPredicate("^g*c1+c*2");
        expect(pred("group(c1+c2)")).toBeTruthy();
        expect(pred("gc1+c2")).toBeTruthy();
        expect(pred("c1+c2")).toBeFalsy();
    });

    it("should generate always false predicate for invalid regular expressions", () => {
        let pred = getRegexPredicate("summary*");
        expect(pred("[")).toBeFalsy();
        expect(pred("} ( - z)")).toBeFalsy();

        pred = getRegexPredicate("} ( - z)");
        expect(pred("sum")).toBeFalsy();
    });
});
