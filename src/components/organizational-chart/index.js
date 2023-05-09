import dynamic from 'next/dynamic';

const OrganizationalChart = dynamic(() => import('./OrganizationalChart'), { ssr: false });

export default OrganizationalChart;
