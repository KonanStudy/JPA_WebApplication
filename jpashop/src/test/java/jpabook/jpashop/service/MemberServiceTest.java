package jpabook.jpashop.service;

import jpabook.jpashop.domain.Member;
import jpabook.jpashop.repository.MemberRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)   // 스프링과 테스트 통합
@SpringBootTest   // 스프링부트 띄우고 테스트(이게 없으면 @Autowired 다 실패!)
@Transactional  // 각각의 테스트 실행할 때마다 트랜잭션을 시작하고 테스트가 끝나면 트랜잭션을 강제로 롤백)
public class MemberServiceTest {

    @Autowired MemberService memberService;
    @Autowired MemberRepository memberRepository;
    @Autowired EntityManager em;

    @Test
    // @Rollback(value = false)   // DB에서 확인 가능
    public void 회원가입() throws Exception {
        // given
        Member member = new Member();
        member.setName("유나");

        // when
        Long saveId = memberService.join(member);

        // then
        em.flush();
        assertEquals(member, memberRepository.findOne(saveId));
    }

    @Test(expected = IllegalStateException.class)
    public void 중복_회원_예외() throws Exception {
        // given
        Member member1 = new Member();
        member1.setName("유나");

        Member member2 = new Member();
        member2.setName("유나");

        // when
        memberService.join(member1);
        memberService.join(member2);  // 예외가 발생해야 한다!!

        // then
        fail("예외가 발생해야 한다!");
    }

}