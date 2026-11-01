const topPhotos = [
  ['1042','Street art and a bright Fitzroy laneway'],
  ['1032','Flowers outside a local florist'],
  ['1064','Weekend market discoveries'],
  ['0952','Painted laneway walls'],
  ['1011','Books and independent shops'],
  ['0961','A local bakery window'],
  ['1051','Vintage clothes at the market'],
  ['0949','A quiet moment outside Lune'],
  ['1052','Market stalls and a blue sky'],
  ['1020','Fitzroy stories in a shop window']
];
const bottomPhotos = [
  ['0953','A green-fronted building in Fitzroy'],
  ['1046','A bird mural in the neighbourhood'],
  ['0981','Colourful finds in an independent shop'],
  ['1050','An outdoor market in Fitzroy'],
  ['1030','Fresh flowers and greenery'],
  ['1044','A laneway filled with street art'],
  ['1016','Art and prints in a local shop'],
  ['1069','Blue skies above the market'],
  ['1076','A sunny graffiti-lined street'],
  ['1024','Books and local stories']
];
function createFilm(id,photos){
  const group=document.getElementById(id);
  photos.forEach(([number,alt],i)=>{
    const frame=document.createElement('div');frame.className='film-photo';
    const img=document.createElement('img');img.src=`assets/dscf${number}.webp`;img.alt=alt;img.decoding='async';
    if(i>2)img.loading='lazy';
    frame.append(img);group.append(frame);
  });
  const clone=group.cloneNode(true);clone.removeAttribute('id');clone.setAttribute('aria-hidden','true');group.after(clone);
}
createFilm('film-one',topPhotos);createFilm('film-two',bottomPhotos);
const motionButton=document.getElementById('motion-toggle');
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let paused=reduceMotion.matches;
function updateMotion(){document.body.classList.toggle('is-paused',paused);motionButton.setAttribute('aria-pressed',String(paused));motionButton.setAttribute('aria-label',paused?'Play photo animation':'Pause photo animation');motionButton.innerHTML=`<span aria-hidden="true">${paused?'▶':'Ⅱ'}</span><span class="motion-label">${paused?'Play photos':'Pause photos'}</span>`;}
motionButton.addEventListener('click',()=>{paused=!paused;updateMotion();});
reduceMotion.addEventListener('change',event=>{paused=event.matches;updateMotion();});
updateMotion();

// Show approved profiles and the campaign account when supplied.
const siteContent = window.SITE_CONTENT || {};
const teamMembers = Array.isArray(siteContent.team) ? siteContent.team : [];
const teamGrid = document.getElementById('team-grid');
teamMembers.filter(member => member.name && member.role && member.photo).forEach(member => {
  const card = document.createElement('article');
  card.className = 'team-member';
  const photo = document.createElement('img');
  photo.src = member.photo;
  photo.alt = member.name;
  photo.loading = 'lazy';
  photo.width = 600;
  photo.height = 750;
  const photoFrame = document.createElement('div');
  photoFrame.className = 'team-photo';
  if (member.crop) {
    const crop = member.crop;
    photo.style.width = `${crop.imageWidth / crop.width * 100}%`;
    photo.style.height = `${crop.imageHeight / crop.height * 100}%`;
    photo.style.left = `${-crop.x / crop.width * 100}%`;
    photo.style.top = `${-crop.y / crop.height * 100}%`;
  }
  photoFrame.append(photo);
  if (member.photoPosition) photo.style.objectPosition = member.photoPosition;
  const name = document.createElement('h3');
  name.textContent = member.name;
  const role = document.createElement('p');
  role.className = 'team-role';
  role.textContent = member.role;
  card.append(photoFrame, name, role);
  if (member.bio) {
    const bio = document.createElement('p');
    bio.className = 'team-bio';
    bio.textContent = member.bio;
    card.append(bio);
  }
  teamGrid.append(card);
});
document.getElementById('team').hidden = teamGrid.childElementCount === 0;
if (siteContent.tiktokUrl) {
  try {
    const url = new URL(siteContent.tiktokUrl);
    if (url.protocol === 'https:' && (url.hostname === 'tiktok.com' || url.hostname.endsWith('.tiktok.com'))) {
      const accountLink = document.createElement('a');
      accountLink.href = url.href;
      accountLink.target = '_blank';
      accountLink.rel = 'noopener';
      accountLink.append(document.createTextNode('TikTok'));
      const account = document.createElement('span');
      account.textContent = siteContent.tiktokHandle || 'Follow along ↗';
      accountLink.append(account);
      document.getElementById('tiktok-entry').replaceWith(accountLink);
    }
  } catch { /* Keep the existing label if an account URL is incomplete. */ }
}
