---
theme: seriph
background: /cover.webp
class: text-center
highlighter: shiki
lineNumbers: false
author: Zequn Liu (Hobee)
info: |
  ## Cross-Cultural Perspectives on AIGC
  Presentation slides for HCII 2024.

  Made by Zequn (Hobee) Liu.

  Learn more about author at [Hobee.me](https://hobee.me)
drawings:
  persist: false
transition: slide-left
title: Cross-Cultural Perspectives on AIGC
mdc: true
presenter: dev
---

# Cross-Cultural Perspectives on AI Generated Content

A Comparative Study of Attitudes and Acceptance Among Global Products

Zequn Liu, Zhe Chen @ Beihang University

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space to Start <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://hobee.me" target="_blank" alt="Hobee.me" title="Open in Hobee.me"
  class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-earth />
  </a>
  <a href="https://github.com/HoBeedzc" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: slide-left
title: Table of Contents
---

# Table of Contents
<Toc maxDepth="2"></Toc>

---
transition: slide-left
---

# Introduction

Background

- Generative AI has been widely adopted in the digital world.
  - **text** generation: GPT-4o, Claude3 Opus, Gemini 1.5 Pro, etc.
  - **image** generation: Stable Diffusion, DALL-E·3, etc.
  - **video** generation: Sora, Luma, etc.
  - **music** generation: Suno, Riffusion, etc.
  - ...
- more engaging, informative, and entertaining.
- used for advertising, entertainment, education, and more.
- revolutionize the way we consume information.

<br>
<br>

It is important to **understand the impact of AI-generated content on different cultural backgrounds**.

<!--
It can generate content that is more engaging, informative, and entertaining than traditional content.

It can be used for various purposes, such as advertising, entertainment, education, and more.

It has the potential to revolutionize the way we consume information.
-->

---
transition: slide-left
hideInToc: true
layout: iframe-right
url: https://poe.com/s/BoQ7YFH0V0xY4KGlScj1
---
# Introduction
Why should we care cross-cultural competence of models?

- The main source of a model's knowledge and linguistic ability is training data.
- The goal of stages like PT, CT, SFT, and RLHF is to train the model's language expression, with RLHF aligning directly with human preferences.
- Although the model supports multiple languages, its proficiency varies across them.
 - Prompts with the same meaning in different languages yield different responses.

However, **the impact of AI-generated content on different cultural backgrounds** is still unclear.

<a href="https://poe.com/s/BoQ7YFH0V0xY4KGlScj1" target="_blank" alt="GitHub"
    title="an example for cross cultural AIGC response"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-blue">
    look at this example
    <carbon-arrow-right class="inline"/>
</a>

---
transition: slide-left
---

# Methodology
data collection

- One social media platform
  - Weibo
- Four metrics
  - Weibo content
  - the number of likes, comments, and forwards
- Six models
  - ChatGPT, Claude and Brad (now Gemini) for English based training data.
  - Qwen, Yiyan and iFlytek Spark for Chinese based training data.

---
transition: slide-left
hideInToc: true
---

# Methodology
data Process

- attitude
  - labeled by SnowNLP: from -1 to 1
- acceptance
  - $L_i' = \frac{L_i - \min(L_j)}{\max(L_j) - \min(L_j)}$ ; $F_i' = \frac{F_i - \min(F_j)}{\max(F_j) - \min(F_j)}$ ; $C_i' = \frac{C_i - \min(C_j)}{\max(C_j) - \min(C_j)}$
  - $A_i = 2L_i' + 2F_i' + C_i'$
- trend over time
  - time window: 15 days
  - method: average


---
layout: two-cols
transition: slide-left
---

# Findings
acceptance

<img src="/acceptance.png" width="100%" height="100%">

- iFlytek Spark and Qwen are more accepted by users than ChatGPT.
- In most time periods, AIGC products trained with Chinese corpora make up more than 50% of the total acceptance.

::right::
<img src="/acceptance_pie.png" width="80%" height="75%">

<!--
This can be attributed to the higher usage barriers and non-localized response styles of non-native products like ChatGPT.

-->

---
layout: two-cols
transition: none
hideInToc: true
---

# Findings
attitudes

<img src="/attitudes.png" width="100%" height="100%">

- User maintain a positive attitude towards
all six AIGC products. 
- Users consistently favor local AIGC products like Spark and Qwen over Claude and ChatGPT, while attitudes towards Bard vary over time.

::right::
<img src="/attitudes_pie.png" width="80%" height="80%">

---
layout: two-cols
transition: slide-left
hideInToc: true
---

# Findings
attitudes

<img src="/attitudes.png" width="100%" height="100%">

- The emotional attitude percentages towards different products are nearly consistent in every time window, suggesting that users hold similar attitudes towards all AIGC products.

::right::
<img src="/attitudes_pie.png" width="80%" height="75%">

---
transition: slide-left
---

# Discussion
Implications

In Terms of **Academic Research**:
- Addresses gap in AIGC user opinion research through blog analysis.
- Links AIGC training to cultural contexts, expanding HCI research.
- Shows scalability from Chinese-based study.
- Plans cross-cultural expansion to global platforms and languages.

In Terms of **Practical Applications**:
- Insights for cross-cultural AIGC product development and use.
- Importance of user media literacy when interacting with AIGC.
- Promoting understanding of AIGC for appropriate selection and beneficial use.

---
transition: slide-left
hideInToc: true
---

# Discussion
Limitations <v-click>and future work</v-click>

**Main limitations:**
1. Applicability issue of the sentiment analysis model
2. Limitations of the user acceptance model

<br>

<v-click>

**Future work:**
1. Developing a more robust sentiment analysis model.
    - Using few-shot LLM to label the sentiment of AIGC content.
    - Finetune the LLM with more related data before labelling.
2. Developing a more robust user acceptance model.
    - Include more factors such as user characteristics, user behavior, and user preferences.
    - Using data from different platforms and languages.

</v-click>



<!--
The study used the Bayesian segmentation model from SnowNLP for sentiment analysis. However, this model was primarily trained for e-commerce scenarios and may not be sufficiently capable of accurately analyzing the complexity and diversity of AIGC-related content. This could have affected the accuracy of the sentiment analysis results.

In constructing the user acceptance model, the study did not fully consider the specific content of comments and individual user characteristics. This oversight neglects the influence of individual differences and comment content on emotional expression, potentially leading to the model's inability to accurately reflect different users' true feelings towards the same product or service.
-->

---
transition: slide-left
---

# Conclusion
Conclusions

**Summary of findings:**
- Users generally have a positive attitude towards **all AIGC products**.
- Users show a slightly **higher preference** for local products compared to non-native ones.
- When faced with AIGC products exhibiting cultural differences, users prefer products **trained with local data**.

**Recommendations:**
- Developers should adopt **more localization strategies** to improve user acceptance of non-native AIGC products.
- There is a need to better meet users' **cultural needs and expectations** in AIGC product development.

---
transition: slide-left
hideInToc: true
---

# References
- Cao, Y., et al.: A comprehensive survey of ai-generated content (aigc): A history
of generative ai from gan to chatgpt. arXiv preprint arXiv:2303.04226 (2023)
- Zhang, C., et al.: A complete survey on generative ai (aigc): Is chatgpt from gpt-4
to gpt-5 all you need?. arXiv preprint arXiv:2303.11717 (2023)
- Else, H.: Abstracts written by ChatGPT fool scientists. Nature 613(7944), 423–423
(2023)
- Dwivedi, Y.K., et al.: “So what if ChatGPT wrote it?” Multidisciplinary perspectives
on opportunities, challenges and implications of generative conversational AI
for research, practice and policy. Int. J. Inf. Manage. 71, 102642 (2023)
- Fu, P., Jing, B., Chen, T., Yang, J., Cong, G.: Modeling network public opinion
propagation with the consideration of individual emotions. Int. J. Environ. Res.
Public Health 17(18), 6681 (2020)
- Guo, D., Chen, H., Wu, R., Wang, Y.: AIGC challenges and opportunities related
to public safety: a case study of ChatGPT. J. Safety Sci. Resilience 4(4), 329–339
(2023)
- Shao, G.: Understanding the appeal of user-generated media: a uses and gratification
perspective. Internet Res. 19(1), 7–25 (2009)


---
layout: center
class: text-center
transition: slide-left
hideInToc: true
---

# Thanks for your listening!
You can find this slide at [slide.hobee.me](https://slide.hobee.me/HCII2024)

---
layout: end
hideInToc: true
---

# The End