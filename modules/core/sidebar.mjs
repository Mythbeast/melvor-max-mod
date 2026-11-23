// core/sidebar.mjs -- module for editing the sidebar

export function initSidebar() { 
    injectSidebarEntry()
 }

function injectSidebarEntry() {
  const check=setInterval(()=>{
    const items=sidebar?.category?.('Non-Combat')?.items?.();
    if(!items?.length) return;
    clearInterval(check);
    if(document.getElementById('button-set-99')) return;
    const firstItem=sidebar.category('Non-Combat').item(items[0].id).itemEl;
    const ul=firstItem?.closest('ul')??firstItem?.parentElement;
    if(!ul) return;
    const button99 = createButton(99)
    const button120 = createButton(120)
    ul.prepend(button99, button120);
  },700);
}

function createButton(level) {
const li=document.createElement('li');
  li.id=`button-set-${level}}`;
  li.innerHTML=`<a style="display:flex;align-items:center;gap:8px;padding:6px 12px;cursor:pointer;background:linear-gradient(90deg,#1a0a2e,transparent);text-decoration:none">
    <span>&#9733;</span>
    <span style="font-size:0.85em">Set to ${level}</span>
  </a>`;
  li.querySelector('a').addEventListener('click', () => setAllUnlockedSkillsToLevel(level));
  return li
}

function setAllUnlockedSkillsToLevel(targetLevel) {
    game.skills.forEach(skill => {
        if (!skill.isUnlocked) return;

				const levelCap = skill._currentLevelCap === -1 ? 99 : skill._currentLevelCap
        const level = Math.min(targetLevel, levelCap);
        const targetXP = exp.level_to_xp(level + 1);
				if (!targetXP) return
				
        skill.setXP(targetXP);
    });
}


