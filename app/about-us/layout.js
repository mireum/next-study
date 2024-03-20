export const metadata = {
  title: "NEXT STUDY",
  description: "About us" ,
};

export default function AboutLayout({ children }) {
  return (
      <div>
        {children}
        $copy; Next JS is great!
      </div>

  );
}

// 괄호로 묶은 route group
// 깔끔해보임, url에 영향을 미치지 않음. 
// root의 layout과 not-found는 어디에나 쓰일 것이므로 home에 넣지 않음