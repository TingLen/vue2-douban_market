import App from '../App.vue'

const home=r=>require.ensure([],()=>r(require('../page/home')),'home')
const sort=r=>require.ensure([],()=>r(require('../page/sort')),'sort')
const cart=r=>require.ensure([],()=>r(require('../page/cart')),'cart')
const login=r=>require.ensure([],()=>r(require('../page/login')),'login')
const mine=r=>require.ensure([],()=>r(require('../page/mine')),'mine')
const detail=r=>require.ensure([],()=>r(require('../page/detail')),'detail')
const list=r=>require.ensure([],()=>r(require('../page/list')),'list')
export default[
{
	path:'/',
	component:App,
	children:[
	{
		path:'',
		component:home
	},
	{
		path:'/sort',
		component:sort
	},
	{
		path:'/cart',
		component:cart
	},
	{
		path:'/mine',
		component:mine
	},
	{
		path:'/login',
		component:login
	},
	{
		path:'/detail',
		component:detail
	},
	{
		path:'/sort/list',
		component:list
	}
	]
}]