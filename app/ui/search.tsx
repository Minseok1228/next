'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
/**디바운스 작동 방식:
이벤트 트리거: 검색창의 키 입력과 같이 디바운스해야 하는 이벤트가 발생하면 타이머가 시작됩니다.
대기: 타이머가 만료되기 전에 새 이벤트가 발생하면 타이머가 재설정됩니다.
실행: 타이머의 카운트다운이 끝나면 디바운스된 함수가 실행됩니다. */
//use,URL searchParams!
export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams(); //?뒤의 매개변수
  const pathname = usePathname(); //app이하 path
  const { replace } = useRouter(); //대신라우팅
  function handleSearch(term: string) {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
      //toString으로 query=입력값(term)
    } else {
      params.delete('query');
    }
    console.log(pathname, params.toString());
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
