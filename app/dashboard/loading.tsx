import DashboardSkeleton from '../ui/skeletons';

export default function Loading() {
  //   return <div>Loading.222..</div>;
  return <DashboardSkeleton />;
}
//import된곳이 없는데 어찌쓰임
/**loading.tsx는 Suspense 위에 구축된 특별한 Next.js 파일로, 페이지 콘텐츠가 로드되는 동안 대체로 표시할 폴백 UI를 만들 수 있습니다.
<SideNav>는 정적이므로 즉시 표시됩니다. 사용자는 동적 콘텐츠가 로드되는 동안 <SideNav>와 상호 작용할 수 있습니다.
사용자는 페이지 로딩이 완료될 때까지 기다렸다가 다른 곳으로 이동할 필요가 없습니다(이를 중단형 탐색이라고 함).
축하합니다! 방금 스트리밍을 구현했습니다. 하지만 사용자 경험을 개선하기 위해 더 많은 일을 할 수 있습니다. 로딩 중... 텍스트 대신 로딩 스켈레톤을 표시해 보겠습니다.*/
