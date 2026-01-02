import { describe, it, expect } from "vitest";
import { render, screen, within } from "@/test/test-utils";
import userEvent from "@testing-library/user-event";
import Objections from "./Objections";

describe("Objections Page", () => {
  it("renders the page title", () => {
    render(<Objections />);
    expect(
      screen.getByRole("heading", { name: /Frequent Objections/i })
    ).toBeInTheDocument();
  });

  it("renders the introductory text mentioning Aquinas tradition", () => {
    render(<Objections />);
    expect(screen.getByText(/tradition of Aquinas/i)).toBeInTheDocument();
  });

  it("renders the Expand All button", () => {
    render(<Objections />);
    expect(
      screen.getByRole("button", { name: /Expand All/i })
    ).toBeInTheDocument();
  });

  it("displays all objection questions", () => {
    render(<Objections />);

    // Check for key objections
    expect(
      screen.getByText(/14-year-olds are too busy playing video games/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/brains aren't fully developed/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/They'll just vote however their parents tell them/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/They don't pay taxes/i)).toBeInTheDocument();
    expect(
      screen.getByText(/just a scheme to benefit \[political party\]/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/should they also drink, drive, and sign contracts/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Why 14 specifically/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Young people don't turn out to vote/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/would require a constitutional amendment/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Adults know better/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Young people don't know enough about government/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Ranked choice voting is too complicated/i)
    ).toBeInTheDocument();
  });

  describe("Why 14 objection", () => {
    it("mentions the original preference for age 13", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/Why 14 specifically/i);
      await user.click(trigger);

      expect(
        screen.getByText(/still personally prefer—13/i)
      ).toBeInTheDocument();
    });

    it("mentions religious coming-of-age traditions", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/Why 14 specifically/i);
      await user.click(trigger);

      expect(screen.getByText(/bar and bat mitzvah/i)).toBeInTheDocument();
      expect(
        screen.getByText(/confirmation in various Christian traditions/i)
      ).toBeInTheDocument();
    });

    it("references the wisdom of two 13-year-olds", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/Why 14 specifically/i);
      await user.click(trigger);

      expect(
        screen.getByText(/wise counsel of two 13-year-olds/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/demean ourselves as good citizens/i)
      ).toBeInTheDocument();
    });

    it("explains the high school transition rationale", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/Why 14 specifically/i);
      await user.click(trigger);

      expect(screen.getByText(/start of high school/i)).toBeInTheDocument();
      expect(screen.getByText(/K-8\/9-12 model/i)).toBeInTheDocument();
    });

    it("mentions research on K-8 schools", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/Why 14 specifically/i);
      await user.click(trigger);

      expect(
        screen.getByText(
          /Research also suggests more positive outcomes when elementary and middle school remain combined as K-8/i
        )
      ).toBeInTheDocument();
    });
  });

  describe("Civics knowledge objection", () => {
    it("addresses the question about youth civics knowledge", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(
        /Young people don't know enough about government/i
      );
      await user.click(trigger);

      expect(
        screen.getByText(/Studies consistently show that adults perform poorly/i)
      ).toBeInTheDocument();
    });

    it("mentions adults failing basic civics tests", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(
        /Young people don't know enough about government/i
      );
      await user.click(trigger);

      expect(
        screen.getByText(/three branches of government/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/congressional representatives/i)
      ).toBeInTheDocument();
    });

    it("highlights the freshness of youth civics education", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(
        /Young people don't know enough about government/i
      );
      await user.click(trigger);

      expect(
        screen.getByText(/knowledge that fades with time for many adults/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/fresh and tested/i)
      ).toBeInTheDocument();
    });

    it("lists specific civics topics students study", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(
        /Young people don't know enough about government/i
      );
      await user.click(trigger);

      // Use more specific patterns to avoid matching other content
      expect(
        screen.getByText(/study the Constitution, the Bill of Rights/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/Federalist Papers/i)).toBeInTheDocument();
      expect(screen.getByText(/Supreme Court cases/i)).toBeInTheDocument();
    });

    it("contrasts engaged students with disengaged adults", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(
        /Young people don't know enough about government/i
      );
      await user.click(trigger);

      expect(
        screen.getByText(/civically disengaged adult/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/separation of powers in 1987/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/analyzed it last Tuesday/i)).toBeInTheDocument();
    });

    it("makes the fresh learning argument", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(
        /Young people don't know enough about government/i
      );
      await user.click(trigger);

      expect(
        screen.getByText(
          /Fresh learning, actively reinforced, is more reliable than distant memory, passively decayed/i
        )
      ).toBeInTheDocument();
    });
  });

  describe("Accordion interaction", () => {
    it("expands all items when Expand All is clicked", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const expandButton = screen.getByRole("button", { name: /Expand All/i });
      await user.click(expandButton);

      // After expanding, button should say "Collapse All"
      expect(
        screen.getByRole("button", { name: /Collapse All/i })
      ).toBeInTheDocument();

      // All responses should be visible
      expect(
        screen.getByText(/Learning Rites curriculum ensures preparation/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/prefrontal cortex argument proves too much/i)
      ).toBeInTheDocument();
    });

    it("collapses all items when Collapse All is clicked", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const expandButton = screen.getByRole("button", { name: /Expand All/i });
      await user.click(expandButton);

      const collapseButton = screen.getByRole("button", {
        name: /Collapse All/i,
      });
      await user.click(collapseButton);

      // Button should revert to "Expand All"
      expect(
        screen.getByRole("button", { name: /Expand All/i })
      ).toBeInTheDocument();
    });

    it("expands individual items when clicked", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(
        /14-year-olds are too busy playing video games/i
      );
      await user.click(trigger);

      expect(
        screen.getByText(/Learning Rites curriculum ensures preparation/i)
      ).toBeInTheDocument();
    });
  });

  describe("Content structure", () => {
    it("displays 'On the Contrary' section for each objection", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const expandButton = screen.getByRole("button", { name: /Expand All/i });
      await user.click(expandButton);

      const contraryHeaders = screen.getAllByText(/On the Contrary:/i);
      expect(contraryHeaders.length).toBeGreaterThan(0);
    });

    it("displays 'Response' section for each objection", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const expandButton = screen.getByRole("button", { name: /Expand All/i });
      await user.click(expandButton);

      const responseHeaders = screen.getAllByText(/^Response:$/i);
      expect(responseHeaders.length).toBeGreaterThan(0);
    });

    it("numbers each objection", () => {
      render(<Objections />);

      expect(screen.getByText("#1")).toBeInTheDocument();
      expect(screen.getByText("#2")).toBeInTheDocument();
      expect(screen.getByText("#3")).toBeInTheDocument();
    });
  });

  describe("Key arguments are present", () => {
    it("contains the Commander-in-Chief mathematics argument", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/Why 14 specifically/i);
      await user.click(trigger);

      expect(
        screen.getByText(/Commander-in-Chief mathematics/i)
      ).toBeInTheDocument();
    });

    it("contains the Inauguration Day cutoff argument", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/Why 14 specifically/i);
      await user.click(trigger);

      expect(
        screen.getByText(/14 by January 20/i)
      ).toBeInTheDocument();
    });

    it("contains the 26th Amendment reference", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/would require a constitutional amendment/i);
      await user.click(trigger);

      // Use more specific patterns to avoid matching other content
      expect(
        screen.getByText(/26th Amendment lowered the voting age/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/just 100 days of ratification/i)
      ).toBeInTheDocument();
    });

    it("contains the RCV explanation", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/Ranked choice voting is too complicated/i);
      await user.click(trigger);

      expect(screen.getByText(/Australia/i)).toBeInTheDocument();
      expect(screen.getByText(/Ireland/i)).toBeInTheDocument();
      expect(screen.getByText(/Maine/i)).toBeInTheDocument();
    });
  });

  // ============================================================
  // ADDITIONAL 50 MEANINGFUL TESTS
  // ============================================================

  describe("Video games objection content", () => {
    it("addresses Model UN and debate clubs as counter-examples", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/14-year-olds are too busy playing video games/i);
      await user.click(trigger);

      expect(screen.getByText(/Model UN/i)).toBeInTheDocument();
      expect(screen.getByText(/debate clubs/i)).toBeInTheDocument();
    });

    it("mentions student government as evidence of youth reasoning", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/14-year-olds are too busy playing video games/i);
      await user.click(trigger);

      expect(screen.getByText(/student government/i)).toBeInTheDocument();
    });

    it("makes the equal voting power argument", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/14-year-olds are too busy playing video games/i);
      await user.click(trigger);

      expect(
        screen.getByText(/same one vote that every adult has/i)
      ).toBeInTheDocument();
    });
  });

  describe("Brain development objection content", () => {
    it("mentions the prefrontal cortex maturation age of 25", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/brains aren't fully developed/i);
      await user.click(trigger);

      expect(screen.getByText(/voting age to 25/i)).toBeInTheDocument();
    });

    it("argues the standard would invalidate 18-year-old voting", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/brains aren't fully developed/i);
      await user.click(trigger);

      expect(
        screen.getByText(/argue against 18-year-olds voting/i)
      ).toBeInTheDocument();
    });

    it("mentions military service as a high-stakes decision trusted to youth", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/brains aren't fully developed/i);
      await user.click(trigger);

      expect(screen.getByText(/serving in the military/i)).toBeInTheDocument();
    });

    it("argues civic engagement improves development", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/brains aren't fully developed/i);
      await user.click(trigger);

      expect(
        screen.getByText(/exercise builds the muscle/i)
      ).toBeInTheDocument();
    });
  });

  describe("Parental influence objection content", () => {
    it("notes adults also vote based on social influence", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/They'll just vote however their parents tell them/i);
      await user.click(trigger);

      expect(
        screen.getByText(/Many adults vote as their parents did/i)
      ).toBeInTheDocument();
    });

    it("mentions the secret ballot as protection", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/They'll just vote however their parents tell them/i);
      await user.click(trigger);

      expect(screen.getByText(/secret ballot/i)).toBeInTheDocument();
    });

    it("mentions freedom of conscience teaching", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/They'll just vote however their parents tell them/i);
      await user.click(trigger);

      expect(screen.getByText(/freedom of conscience/i)).toBeInTheDocument();
    });
  });

  describe("Taxation objection content", () => {
    it("notes that many youth do pay taxes", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/They don't pay taxes/i);
      await user.click(trigger);

      expect(
        screen.getByText(/Many 14-year-olds do pay taxes/i)
      ).toBeInTheDocument();
    });

    it("mentions sales tax and income tax", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/They don't pay taxes/i);
      await user.click(trigger);

      expect(screen.getByText(/income tax/i)).toBeInTheDocument();
      expect(screen.getByText(/sales tax/i)).toBeInTheDocument();
    });

    it("references 'no taxation without representation' as a slogan", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/They don't pay taxes/i);
      await user.click(trigger);

      expect(
        screen.getByText(/no taxation without representation/i)
      ).toBeInTheDocument();
    });

    it("mentions military conscription eligibility", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/They don't pay taxes/i);
      await user.click(trigger);

      expect(
        screen.getByText(/military conscription eligibility/i)
      ).toBeInTheDocument();
    });
  });

  describe("Partisan scheme objection content", () => {
    it("notes youth views are not monolithic", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/just a scheme to benefit \[political party\]/i);
      await user.click(trigger);

      expect(
        screen.getByText(/neither monolithic nor predictable/i)
      ).toBeInTheDocument();
    });

    it("references historical suffrage expansions", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/just a scheme to benefit \[political party\]/i);
      await user.click(trigger);

      expect(screen.getByText(/women/i)).toBeInTheDocument();
      expect(screen.getByText(/Black Americans/i)).toBeInTheDocument();
    });

    it("asks whether the exclusion is just", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/just a scheme to benefit \[political party\]/i);
      await user.click(trigger);

      expect(
        screen.getByText(/whether the exclusion is just/i)
      ).toBeInTheDocument();
    });
  });

  describe("Other rights objection content", () => {
    it("mentions the different ages for different activities", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/should they also drink, drive, and sign contracts/i);
      await user.click(trigger);

      expect(screen.getByText(/work at 14/i)).toBeInTheDocument();
      expect(screen.getByText(/drive at 16/i)).toBeInTheDocument();
      expect(screen.getByText(/vote at 18/i)).toBeInTheDocument();
      expect(screen.getByText(/drink at 21/i)).toBeInTheDocument();
    });

    it("argues voting has low individual risk", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/should they also drink, drive, and sign contracts/i);
      await user.click(trigger);

      expect(
        screen.getByText(/low individual risk, high collective benefit/i)
      ).toBeInTheDocument();
    });

    it("contrasts voting with driving danger", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/should they also drink, drive, and sign contracts/i);
      await user.click(trigger);

      expect(
        screen.getByText(/a car poorly driven kills/i)
      ).toBeInTheDocument();
    });
  });

  describe("Turnout objection content", () => {
    it("mentions Austria's voting age of 16", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/Young people don't turn out to vote anyway/i);
      await user.click(trigger);

      expect(screen.getByText(/Austria at 16/i)).toBeInTheDocument();
    });

    it("mentions lifelong voting habits", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/Young people don't turn out to vote anyway/i);
      await user.click(trigger);

      expect(
        screen.getByText(/builds lifelong voting habits/i)
      ).toBeInTheDocument();
    });

    it("compares young voter turnout to 18-21 year olds", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/Young people don't turn out to vote anyway/i);
      await user.click(trigger);

      expect(
        screen.getByText(/higher turnout than 18-21 year olds/i)
      ).toBeInTheDocument();
    });
  });

  describe("Constitutional amendment objection content", () => {
    it("describes the 26th Amendment as the fastest in history", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/would require a constitutional amendment/i);
      await user.click(trigger);

      expect(
        screen.getByText(/fastest amendment in American history/i)
      ).toBeInTheDocument();
    });

    it("mentions the 'old enough to fight' slogan", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/would require a constitutional amendment/i);
      await user.click(trigger);

      expect(
        screen.getByText(/old enough to fight, old enough to vote/i)
      ).toBeInTheDocument();
    });

    it("mentions states can act without federal action", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/would require a constitutional amendment/i);
      await user.click(trigger);

      expect(
        screen.getByText(/states can lower their voting age/i)
      ).toBeInTheDocument();
    });
  });

  describe("Adults know better objection content", () => {
    it("mentions climate crisis as adult-caused harm", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/Adults know better/i);
      await user.click(trigger);

      expect(screen.getByText(/climate crisis/i)).toBeInTheDocument();
    });

    it("mentions unsustainable debt", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/Adults know better/i);
      await user.click(trigger);

      expect(screen.getByText(/unsustainable debt/i)).toBeInTheDocument();
    });

    it("inverts the burden of proof", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/Adults know better/i);
      await user.click(trigger);

      expect(
        screen.getByText(/inverts the burden of proof/i)
      ).toBeInTheDocument();
    });

    it("requires only legitimate interest and basic reasoning", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/Adults know better/i);
      await user.click(trigger);

      expect(
        screen.getByText(/legitimate interest and basic reasoning capacity/i)
      ).toBeInTheDocument();
    });
  });

  describe("RCV objection content", () => {
    it("mentions Alaska as an RCV jurisdiction", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/Ranked choice voting is too complicated/i);
      await user.click(trigger);

      expect(screen.getByText(/Alaska/i)).toBeInTheDocument();
    });

    it("mentions New York City as an RCV jurisdiction", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/Ranked choice voting is too complicated/i);
      await user.click(trigger);

      expect(screen.getByText(/New York City/i)).toBeInTheDocument();
    });

    it("explains voters rank their preferences", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/Ranked choice voting is too complicated/i);
      await user.click(trigger);

      expect(screen.getByText(/rank their preferences/i)).toBeInTheDocument();
    });

    it("mentions Learning Rites curriculum includes RCV", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/Ranked choice voting is too complicated/i);
      await user.click(trigger);

      expect(
        screen.getByText(/Learning Rites curriculum includes RCV mastery/i)
      ).toBeInTheDocument();
    });

    it("mentions Australia has used RCV since 1918", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger = screen.getByText(/Ranked choice voting is too complicated/i);
      await user.click(trigger);

      expect(screen.getByText(/federally since 1918/i)).toBeInTheDocument();
    });
  });

  describe("Multiple accordion items interaction", () => {
    it("can have multiple items expanded simultaneously", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger1 = screen.getByText(/14-year-olds are too busy playing video games/i);
      const trigger2 = screen.getByText(/brains aren't fully developed/i);

      await user.click(trigger1);
      await user.click(trigger2);

      // Both should be expanded
      expect(
        screen.getByText(/Learning Rites curriculum ensures preparation/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/prefrontal cortex argument proves too much/i)
      ).toBeInTheDocument();
    });

    it("can collapse individual items while others remain expanded", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const trigger1 = screen.getByText(/14-year-olds are too busy playing video games/i);
      const trigger2 = screen.getByText(/brains aren't fully developed/i);

      await user.click(trigger1);
      await user.click(trigger2);
      await user.click(trigger1); // Collapse first one

      // Second should still be expanded
      expect(
        screen.getByText(/prefrontal cortex argument proves too much/i)
      ).toBeInTheDocument();
    });
  });

  describe("Page layout and structure", () => {
    it("renders Navigation component", () => {
      render(<Objections />);
      // Look for the nav element with the Raising Rights brand link
      expect(screen.getByRole("navigation")).toBeInTheDocument();
    });

    it("renders Footer component", () => {
      render(<Objections />);
      expect(screen.getByText(/Lifesaver Labs Coalition/i)).toBeInTheDocument();
    });

    it("has exactly 12 objections", () => {
      render(<Objections />);

      // Check for all 12 numbers
      for (let i = 1; i <= 12; i++) {
        expect(screen.getByText(`#${i}`)).toBeInTheDocument();
      }
    });

    it("describes extending vote to 14-year-olds in intro", () => {
      render(<Objections />);
      expect(
        screen.getByText(/Extending the vote to 14-year-olds/i)
      ).toBeInTheDocument();
    });

    it("mentions reforming electoral system in intro", () => {
      render(<Objections />);
      expect(
        screen.getByText(/reforming our electoral system/i)
      ).toBeInTheDocument();
    });

    it("describes the Aquinas format with three parts", () => {
      render(<Objections />);
      expect(
        screen.getByText(/stating the objection fairly/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/offering a contrary principle/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/providing our response/i)
      ).toBeInTheDocument();
    });
  });

  describe("Accessibility and semantic structure", () => {
    it("has a main heading at level 1", () => {
      render(<Objections />);
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toHaveTextContent(/Frequent Objections/i);
    });

    it("each objection trigger is a button", () => {
      render(<Objections />);
      const buttons = screen.getAllByRole("button");
      // Should have expand/collapse button plus all 12 objection triggers
      expect(buttons.length).toBeGreaterThanOrEqual(13);
    });

    it("expand all button toggles its text", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const button = screen.getByRole("button", { name: /Expand All/i });
      expect(button).toHaveTextContent("Expand All");

      await user.click(button);
      expect(button).toHaveTextContent("Collapse All");

      await user.click(button);
      expect(button).toHaveTextContent("Expand All");
    });
  });

  describe("Content completeness for all objections", () => {
    it("each objection has both contrary and response sections when expanded", async () => {
      const user = userEvent.setup();
      render(<Objections />);

      const expandButton = screen.getByRole("button", { name: /Expand All/i });
      await user.click(expandButton);

      const contraryLabels = screen.getAllByText(/On the Contrary:/i);
      const responseLabels = screen.getAllByText(/^Response:$/i);

      // Should have 12 of each
      expect(contraryLabels).toHaveLength(12);
      expect(responseLabels).toHaveLength(12);
    });
  });

  describe("Footer links in page context", () => {
    it("has link to The Case for 14 page", () => {
      render(<Objections />);
      const links = screen.getAllByRole("link", { name: /The Case for 14/i });
      expect(links.length).toBeGreaterThan(0);
    });

    it("has link to Frequent Objections page", () => {
      render(<Objections />);
      const links = screen.getAllByRole("link", { name: /Frequent Objections/i });
      expect(links.length).toBeGreaterThan(0);
    });

    it("has external link to StudentVote.us", () => {
      render(<Objections />);
      const link = screen.getByRole("link", { name: /StudentVote\.us/i });
      expect(link).toHaveAttribute("href", "https://studentvote.us");
      expect(link).toHaveAttribute("target", "_blank");
    });
  });
});
