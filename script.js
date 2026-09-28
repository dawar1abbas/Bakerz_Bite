document.addEventListener('DOMContentLoaded', () => {
const products=[
{name:'Dark Chocolate Fudge',cat:'Cakes',price:1200,img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85',desc:'Deep cocoa sponge, glossy ganache and silky fudge cream.'},
{name:'Pistachio Cloud Cake',cat:'Cakes',price:1450,img:'https://i.etsystatic.com/55353974/r/il/00cdf8/6991124868/il_794xN.6991124868_832f.jpg',desc:'Soft vanilla layers with pistachio cream and roasted nuts.'},
{name:'Berry Velvet Cake',cat:'Cakes',price:1550,img:'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=1000&q=85',desc:'Velvety sponge, cream and tart seasonal berries.'},
{name:'Butter Croissant',cat:'Pastries',price:350,img:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=85',desc:'Crisp, flaky layers made with cultured butter.'},
{name:'Cinnamon Spiral',cat:'Pastries',price:450,img:'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1000&q=85',desc:'Soft enriched dough, cinnamon sugar and cream glaze.'},
{name:'Almond Morning Danish',cat:'Pastries',price:420,img:'https://tb-static.uber.com/prod/image-proc/processed_images/3293c778f82f6282c018eed09f765aa4/c67fc65e9b4e16a553eb7574fba090f1.jpeg',desc:'Golden pastry with almond frangipane and toasted flakes.'},
{name:'Double Choc Chunk',cat:'Cookies',price:280,img:'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1000&q=85',desc:'Chewy cocoa cookie with pools of dark chocolate.'},
{name:'Sea Salt Caramel Cookie',cat:'Cookies',price:300,img:'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=85',desc:'Buttery cookie, caramel centre and a pinch of sea salt.'},
{name:'Oat & Raisin Cookie',cat:'Cookies',price:260,img:'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1000',desc:'Toasty oats, golden raisins and brown sugar.'},
{name:'Apple Crumble Pie',cat:'Pies',price:950,img:'https://images.pexels.com/photos/5662079/pexels-photo-5662079.jpeg?auto=compress&cs=tinysrgb&w=1000',desc:'Spiced apples under a buttery, crunchy crumble.'},
{name:'Lemon Meringue Pie',cat:'Pies',price:1050,img:'https://images.pexels.com/photos/37174473/pexels-photo-37174473.jpeg?auto=compress&cs=tinysrgb&w=1000',desc:'Bright lemon curd, crisp crust and torched meringue.'},
{name:'Chocolate Ganache Tart',cat:'Pies',price:990,img:'https://cdn.shopify.com/s/files/1/0883/2581/6638/files/20241013095140-chocolate-gananche-tart-recipe19.jpg?height=1000&v=1728813102&width=1000',desc:'Dark chocolate ganache in a delicate cocoa shell.'},
{name:'Red Velvet Cream',cat:'Cupcakes',price:320,img:'https://images.pexels.com/photos/28122547/pexels-photo-28122547.jpeg?auto=compress&cs=tinysrgb&w=1000',desc:'Cocoa-red sponge with cloud-soft cream cheese frosting.'},
{name:'Pistachio Rose Cupcake',cat:'Cupcakes',price:360,img:'https://images.pexels.com/photos/36910348/pexels-photo-36910348.jpeg?auto=compress&cs=tinysrgb&w=1000',desc:'Pistachio sponge, rose cream and crushed pistachio.'},
{name:'Vanilla Confetti',cat:'Cupcakes',price:290,img:'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=1000',desc:'Vanilla cake, whipped frosting and tiny rainbow crunch.'},
{name:'Salted Caramel Donut',cat:'Donuts',price:300,img:'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1000&q=85',desc:'Pillowy ring, salted caramel glaze and crisp sugar.'},
{name:'Strawberry Glaze',cat:'Donuts',price:320,img:'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=85',desc:'Soft brioche donut with strawberry glaze and cream.'},
{name:'Dark Choc Sprinkle',cat:'Donuts',price:310,img:'https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=1000&q=85',desc:'Chocolate glaze, cocoa crumb and a little crunch.'},
{name:'Flat White',cat:'Coffee',price:420,img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85',desc:'Velvety espresso and silky microfoam.'},
{name:'Honey Cinnamon Latte',cat:'Coffee',price:480,img:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=85',desc:'Espresso, steamed milk, honey and cinnamon.'},
{name:'Iced Mocha',cat:'Coffee',price:520,img:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1000&q=85',desc:'Cold espresso, chocolate, milk and soft cream.'},
{name:'Pistachio Milk',cat:'Drinks',price:490,img:'https://kalejunkie.com/wp-content/uploads/2025/09/KJ-3-Ingredient-Pistachio-Milk-4-scaled.jpg',desc:'Creamy pistachio milk with a toasted nut finish.'},
{name:'Berry Iced Tea',cat:'Drinks',price:380,img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1000&auto=format&fit=crop',desc:'Chilled berry tea, citrus and crushed ice.'},
{name:'Hot Chocolate',cat:'Drinks',price:450,img:'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=1000&q=85',desc:'Thick dark chocolate, steamed milk and vanilla.'}
];
const $=(sel,root=document)=>root.querySelector(sel);
const $$=(sel,root=document)=>[...root.querySelectorAll(sel)];
const seen=new Set(); products.forEach(p=>{if(seen.has(p.img)) console.warn('Duplicate image URL:',p.name);seen.add(p.img)});

document.addEventListener('error',e=>{if(e.target.tagName==='IMG'&&!e.target.dataset.fallback){e.target.dataset.fallback='1';e.target.src='assets/bakery-fallback.svg';}},true);
let cart=JSON.parse(localStorage.getItem('bbCart2')||'[]');
let currentCat='All';
const cats=['All','Cakes','Pastries','Cookies','Pies','Cupcakes','Donuts','Coffee','Drinks'];
let mood='all';
const moodMap={all:null,sweet:['Cakes','Cookies','Cupcakes','Donuts','Pies'],coffee:['Coffee'],cozy:['Pastries','Cakes','Coffee','Drinks']};
const filters=$('#filters');
if(filters) filters.innerHTML=cats.map((x,i)=>`<button class="filter ${i===0?'active':''}" data-cat="${x}">${x}</button>`).join('');
function render(q=''){const query=q.toLowerCase().trim();const moodCats=moodMap[mood];const list=products.filter(p=>(currentCat==='All'||p.cat===currentCat)&&(!moodCats||moodCats.includes(p.cat))&&(!query||(p.name+' '+p.cat+' '+p.desc).toLowerCase().includes(query)));const count=$('#menuCount'),grid=$('#productGrid');if(count)count.textContent=list.length+' items';const moodLabel=$('#moodResult');if(moodLabel){const labels={all:'Showing the full bakery',sweet:'Sweet Tooth picks',coffee:'Coffee Run — coffee first',cozy:'Cozy Catch-up picks'};moodLabel.textContent=labels[mood]||labels.all;}if(grid)grid.innerHTML=list.length?list.map((p,i)=>`<div class="col-sm-6 col-xl-4"><article class="product-card"><div class="product-img"><img src="${p.img}" alt="${p.name}" loading="lazy"><span class="product-tag">${i<3&&currentCat==='All'?'BAKER’S PICK':p.cat.toUpperCase()}</span></div><div class="product-body"><span class="product-cat">${p.cat}</span><h3>${p.name}</h3><p>${p.desc}</p><div class="product-foot"><span class="product-price">Rs. ${p.price.toLocaleString()}</span><button class="add-btn" data-name="${p.name}"><i class="bi bi-bag-plus"></i> Add</button></div></div></article></div>`).join(''):`<div class="col-12"><div class="empty-menu"><i class="bi bi-cookie"></i><h3>That craving escaped us.</h3><p>Try “chocolate”, “coffee”, “pistachio” or another category.</p></div></div>`}
render();
const search=$('#menuSearch'); if(search)search.addEventListener('input',e=>render(e.target.value));
document.addEventListener('click',e=>{const mb=e.target.closest('.mood-btn');if(mb){mood=mb.dataset.mood;$$('.mood-btn').forEach(x=>x.classList.toggle('active',x===mb));currentCat='All';$$('.filter').forEach(x=>x.classList.toggle('active',x.dataset.cat==='All'));render(search?search.value:'');showToast(mood==='sweet'?'Sweet Tooth selected.':mood==='coffee'?'Coffee Run selected.':mood==='cozy'?'Cozy Catch-up selected.':'Everything is back on the table.')}const f=e.target.closest('.filter');if(f){currentCat=f.dataset.cat;mood='all';$$('.mood-btn').forEach(x=>x.classList.toggle('active',x.dataset.mood==='all'));$$('.filter').forEach(x=>x.classList.remove('active'));f.classList.add('active');render(search?search.value:'')}const addBtn=e.target.closest('.add-btn');if(addBtn){const p=products.find(x=>x.name===addBtn.dataset.name);if(p)add(p.name,p.price,p.img)}const offer=e.target.closest('.add-offer,.merch-add');if(offer)add(offer.dataset.offer,offer.dataset.price,'');const qty=e.target.closest('[data-qty]');if(qty){const i=+qty.dataset.i;if(cart[i]){cart[i].qty+=+qty.dataset.qty;if(cart[i].qty<=0)cart.splice(i,1);saveCart()}}const rem=e.target.closest('[data-remove]');if(rem){cart.splice(+rem.dataset.remove,1);saveCart()}});
function add(name,price,img){let item=cart.find(x=>x.name===name);if(item)item.qty++;else cart.push({name,price:+price,img:img||products.find(p=>p.name===name)?.img||'',qty:1});saveCart();showToast(name+' added to your bag.')}
function saveCart(){localStorage.setItem('bbCart2',JSON.stringify(cart));renderCart()}
function renderCart(){const count=cart.reduce((a,x)=>a+x.qty,0),total=cart.reduce((a,x)=>a+x.qty*x.price,0);const bc=$('#bagCount'),ct=$('#cartTotal'),body=$('#cartBody');if(bc)bc.textContent=count;if(ct)ct.textContent='Rs. '+total.toLocaleString();if(!body)return;if(!cart.length){body.innerHTML='<div class="cart-empty"><i class="bi bi-bag-heart"></i><h3>Your bag is waiting.</h3><p>Add a few favourites and they will show up here.</p></div>';return}body.innerHTML=cart.map((x,i)=>`<div class="cart-item"><div>${x.img?`<img src="${x.img}" alt="">`:'<div style="width:62px;height:62px;background:linear-gradient(145deg,#d9a85f,#332014);display:grid;place-items:center;color:#1b120b;font-weight:800">BB</div>'}</div><div><b>${x.name}</b><small>Rs. ${x.price.toLocaleString()}</small><div class="qty"><button data-qty="-1" data-i="${i}">−</button><span>${x.qty}</span><button data-qty="1" data-i="${i}">+</button></div></div><button class="remove" data-remove="${i}">×</button></div>`).join('')}
renderCart();
function openCart(){$('.cart')?.classList.add('open');$('.cart-backdrop')?.classList.add('show')}function closeCart(){$('.cart')?.classList.remove('open');$('.cart-backdrop')?.classList.remove('show')}$('.bag-open')?.addEventListener('click',openCart);$('.cart-close')?.addEventListener('click',closeCart);$('.cart-backdrop')?.addEventListener('click',closeCart);$('#checkout')?.addEventListener('click',()=>showToast(cart.length?'Order ready — this is a demo checkout.':'Your bag is empty.'));
function showToast(t){const el=$('#toastNote');if(!el)return;el.textContent=t;el.classList.add('show');clearTimeout(window.bbToast);window.bbToast=setTimeout(()=>el.classList.remove('show'),2200)}
const mobileMenu=$('.mobile-menu');
const mobileNav=$('.mobile-nav');
function closeMobileNav(){if(!mobileNav)return;mobileNav.classList.remove('show');document.body.classList.remove('mobile-menu-open');mobileMenu?.setAttribute('aria-expanded','false');}
function openMobileNav(){if(!mobileNav)return;mobileNav.classList.add('show');document.body.classList.add('mobile-menu-open');mobileMenu?.setAttribute('aria-expanded','true');}
mobileMenu?.setAttribute('aria-expanded','false');
mobileMenu?.setAttribute('aria-label','Open navigation');
mobileMenu?.addEventListener('click',()=>mobileNav?.classList.contains('show')?closeMobileNav():openMobileNav());
const navObserver=new MutationObserver(()=>mobileMenu?.setAttribute('aria-label',mobileNav?.classList.contains('show')?'Close navigation':'Open navigation'));
if(mobileNav)navObserver.observe(mobileNav,{attributes:true,attributeFilter:['class']});
mobileNav?.querySelectorAll('.navgo').forEach(link=>link.addEventListener('click',closeMobileNav));
mobileNav?.addEventListener('click',e=>{if(e.target===mobileNav)closeMobileNav();});
window.addEventListener('resize',()=>{if(window.innerWidth>800)closeMobileNav();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMobileNav();});
$('#randomPick')?.addEventListener('click',()=>{const p=products[Math.floor(Math.random()*products.length)];currentCat=p.cat;$$('.filter').forEach(x=>x.classList.toggle('active',x.dataset.cat===p.cat));if(search)search.value=p.name;render(p.name);showToast('We picked '+p.name+' for you.')});
$('#contactForm')?.addEventListener('submit',e=>{e.preventDefault();$('#contactStatus').textContent='Message received. We’ll get back to you soon.';e.target.reset()});
const hideLoader=()=>document.querySelector('.preloader')?.classList.add('done');
setTimeout(hideLoader,900);
window.addEventListener('load',()=>setTimeout(hideLoader,100));
});

