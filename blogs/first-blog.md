---
title: I Built Dueline Because TDS Deadlines Kept Slipping Past Me
date: 2026-11-12
tag: Projects
excerpt: How missing a TDS deadline and hearing my peers complain about it led me to build Dueline.
banner: dueline-tds-deadline-tracker.png
---

I missed a deadline in Tools in Data Science (TDS), and it cost me marks. That could have stayed a one-off annoyance, but around the same time I kept seeing the same complaint on Discourse: "Which question closes when?" I wasn't the only one losing track, so I decided to fix it. The result is **Dueline**, a small website that lists every TDS deadline in one place.

## The problem: deadlines everywhere

TDS is one of the courses in the IIT Madras BS in Data Science program. Its assignments don't have a single deadline. Questions are released in stages, so the first four questions of a graded assignment might close this Sunday while the rest close the week after. A single project question can even have two phases with deadlines a few days apart.

Add two take-home projects and a pile of graded assignments, and you end up keeping a spreadsheet in your head. The information was spread across exam pages and announcements. There was nowhere to look and see what was due next, and when.

## The idea

I wanted something very simple:

- one page, with deadlines in date order
- grouped by day, with the question and the closing time under each date
- a "Next up" section at the top, so the most urgent thing is always visible

It also had to be quick to update, because the site is only useful if the dates stay current.

## How it works

I built it with **Vue.js**, mostly because it's the stack I already know. That meant I could read, understand and change the code myself instead of trusting it blindly.

I didn't want to run a database for a project this small. I planned to host it on Vercel from a GitHub repo, so I kept the data in a plain XML file next to the code. The site loads the file in the browser and draws the page from it. Each deadline is one line:

```xml
<deadline date="2026-11-05" time="23:59" kind="project" title="Project 1" part="Question 2" />
```

Updating the site means editing that file and pushing to GitHub. Vercel redeploys it automatically. The page reads the file like this:

```javascript
const doc = new DOMParser().parseFromString(text, 'application/xml')
const items = [...doc.querySelectorAll('deadline')]
  .map((el) => ({
    title: el.getAttribute('title'),
    part: el.getAttribute('part'),
    due: new Date(`${el.getAttribute('date')}T${el.getAttribute('time')}:00+05:30`),
  }))
  .sort((a, b) => a.due - b.due)
```

Everything is shown in IST, so it looks the same wherever you open it. Over time I added a few things:

- colored cards, with orange for graded assignments and yellow for projects, so you can tell them apart at a glance
- filters to see only assignments or only projects
- a light and a dark mode
- links from each card to the exam page

## Building it with Claude

I built Dueline with Claude. I described the problem, the design I wanted and the behavior I expected, then reviewed what came back, tested it in the browser and asked for changes. Since I know Vue, I could read the code instead of treating it as a black box.

The AI wrote a lot of the code. But I decided what to build, how it should look, and what was wrong when I opened the site. I also needed my own judgment when something looked right but wasn't.

## Two bugs that taught me something

**"Next up" showed only one deadline.** One day had two deadlines, one at 11:59 AM and one at 11:59 PM, but the top section showed just the first. I changed it to show everything due on the same day, each with its own countdown.

**Three November deadlines silently disappeared.** I had written dates like `2026-11-2` instead of `2026-11-02`. The browser can't parse those, so the site quietly skipped them. The site now pads the numbers itself, and it logs a warning in the console whenever it skips an entry.

Neither bug was hard to fix. They only showed up because I was using the site myself, which is a good reason to build things you actually need.

## What I learned

It's easy to solve a problem with AI these days. You can describe an idea in plain language and have a working page in a short time. What is hard is finding a problem worth solving.

Dueline exists because I missed a deadline and because my classmates were frustrated in public. The building was the easy part. The hard part was noticing that a small, boring annoyance was worth fixing. So I'm paying more attention to what people around me complain about.

## What's next

Right now I type the dates in by hand, and that's where mistakes can creep in. I'm experimenting with a script that reads the exam pages' public files and uses Gemini to pull out each question's deadline, so I can review the results instead of typing them.

Dueline is not an official IIT Madras or TDS site. If you take the course, use it as a helper, and always confirm deadlines on the course pages.

You can try it at [dueline-tds.vercel.app](https://dueline-tds.vercel.app/) and read the code on [GitHub](https://github.com/sarangkrish27/dueline). If you spot a mistake, tell me and I'll fix it. And if something small keeps annoying you and your classmates, that might be your next project.