import HighchartsHOC from '../pages/highcharts/HighchartsHOC';
import DashboardHOC from '../pages/highcharts/dashboard/DashboardHOC';
import RechartsHOC from '../pages/recharts/dashboard/index.js';
import HighchartsTabs from '../pages/highcharts/HighchartsTabs';
import VictoryCards from '../pages/victory';
import SemioticTabs from '../pages/semiotic/SemioticTabs';
import OthersTabs from '../pages/others/OthersTabs';

export const routes = [
  {
    path: '/highcharts',
    component: HighchartsTabs 
  },
  {
    path: '/highcharts/dashboard',
    component: DashboardHOC
  },
  {
    path: '/highcharts/pie',
    component: HighchartsHOC
  },
  {
    path: '/highcharts/bar',
    component: DashboardHOC
  },
  {
    path: '/highcharts/line',
    component: DashboardHOC
  },
  {
    path: '/highcharts/combo',
    component: DashboardHOC
  },
  {
    path: '/highcharts/heatmap',
    component: DashboardHOC
  },
  {
    path: '/highcharts/geomap',
    component: DashboardHOC
  },
  {
    path: '/recharts',
    component: RechartsHOC
  },
  {
    path: '/victory',
    component: VictoryCards
  },
  {
    path:'/semiotic',
    component: SemioticTabs
  },
  {
    path: '/others',
    component: OthersTabs
  }
];
