class SkillCard extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const tag0 = this.getAttribute("tag0") || "";
      const tag1 = this.getAttribute("tag1") || "";
      const tag2 = this.getAttribute("tag2") || "";
      const tag3 = this.getAttribute("tag3") || "";
      const tag4 = this.getAttribute("tag4") || "";
      const tag5 = this.getAttribute("tag5") || "";
      const tag6 = this.getAttribute("tag6") || "";
      const tag7 = this.getAttribute("tag7") || "";
      const tag8 = this.getAttribute("tag8") || "";
      const tag9 = this.getAttribute("tag9") || "";
      const tag10 = this.getAttribute("tag10") || "";
      const tag11 = this.getAttribute("tag11") || "";
      const tag12 = this.getAttribute("tag12") || "";
      const tag13 = this.getAttribute("tag13") || "";
      const tag14 = this.getAttribute("tag14") || "";
      const tag15 = this.getAttribute("tag15") || "";
      const tag16 = this.getAttribute("tag16") || "";
      const tag17 = this.getAttribute("tag17") || "";
      const isCompleted = this.getAttribute("status") === "true";
  
      this.innerHTML = `
        <article class="project" style="width: 100%;">
            <div class="head">
            </div>
          <div class="foot">
            <div class="tags">
                ${tag0 && `<span class="${tag0.toLowerCase()}">${tag0}</span>`}
                ${tag1 && `<span class="${tag1.toLowerCase()}">${tag1}</span>`}
                ${tag2 && `<span class="${tag2.toLowerCase()}">${tag2}</span>`}
                ${tag3 && `<span class="${tag3.toLowerCase()}">${tag3}</span>`}
                ${tag4 && `<span class="${tag4.toLowerCase()}">${tag4}</span>`}
                ${tag5 && `<span class="${tag5.toLowerCase()}">${tag5}</span>`}
                ${tag6 && `<span class="${tag6.toLowerCase()}">${tag6}</span>`}
                ${tag7 && `<span class="${tag7.toLowerCase()}">${tag7}</span>`}
                ${tag8 && `<span class="${tag8.toLowerCase()}">${tag8}</span>`}
                ${tag9 && `<span class="${tag9.toLowerCase()}">${tag9}</span>`}
                ${tag10 && `<span class="${tag10.toLowerCase()}">${tag10}</span>`}
                ${tag11 && `<span class="${tag11.toLowerCase()}">${tag11}</span>`}
                ${tag12 && `<span class="${tag12.toLowerCase()}">${tag12}</span>`}
                ${tag13 && `<span class="${tag13.toLowerCase()}">${tag13}</span>`}
                ${tag14 && `<span class="${tag14.toLowerCase()}">${tag14}</span>`}
                ${tag15 && `<span class="${tag15.toLowerCase()}">${tag15}</span>`}
                ${tag16 && `<span class="${tag16.toLowerCase()}">${tag16}</span>`}
                ${tag17 && `<span class="${tag17.toLowerCase()}">${tag17}</span>`}
            </div>
            ${isCompleted ? `<span class="status">PROD</span>` : ''}
          </div>
        </article>
      `;
    }
  }
  
  customElements.define("skill-card", SkillCard);
  