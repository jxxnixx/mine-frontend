import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const featureList = [
  {
    name: "프로젝트 찾기",
    description: "관심 있는 프로젝트를 찾고, 지원해보세요!",
    icon: GlobeAltIcon,
  },
  {
    name: "프로젝트 등록하기",
    description:
      "하고 싶은 프로젝트가 있나요? 프로젝트를 등록해서 동료들을 모아보세요!",
    icon: ScaleIcon,
  },
  {
    name: "대시보드",
    description:
      "현재 참여중인 프로젝트들과, 현재 진행상황을 확인할 수 있어요!",
    icon: LightningBoltIcon,
  },
  {
    name: "커뮤니티",
    description: "다양한 분야의 사람들과 소통하면서, 다양한 정보를 얻어보세요!",
    icon: AnnotationIcon,
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            주요 기능
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            프로젝트를 해볼 수 있는 최적의 환경
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            이곳에서 프로젝트를 등록하고, 찾아보고, 지원하고, 시작하세요!
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featureList.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
