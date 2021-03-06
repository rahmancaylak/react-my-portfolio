//FontAwesome Icons
import { FaRegTimesCircle } from 'react-icons/fa';
//Component
import {
  Section,
  Container,
  Close,
  Content,
  Left,
  Right,
  Title,
  Ul,
  Li,
} from '../../styles/Modal';

export default function Modal({ setShowModal, ...rest }) {
  return (
    <>
      <Section>
        <Container>
          <Close onClick={() => setShowModal(false)}>
            <FaRegTimesCircle />
          </Close>
          <Content>
            <Left>
              <img src={rest.output} alt='test' style={{ height: '100%' }} />
            </Left>
            <Right>
              <Title>
                {rest.title} (
                <a href={rest.url} className='hover:text-white'>
                  Live
                </a>
                )
              </Title>
              <Title>Which Technology Used</Title>
              <Ul>
                {rest.usedTechnology.map((item) => (
                  <Li key={item.id}>
                    {item.link !== '' ? (
                      <a
                        className='hover:text-white hover:underline'
                        href={item.link}
                      >
                        {item.name}
                      </a>
                    ) : (
                      item.name
                    )}
                  </Li>
                ))}
                <Li>
                  <a
                    className='hover:text-white hover:underline'
                    href={rest.repoUrl}
                  >
                    GitHub Repo
                  </a>
                </Li>
              </Ul>
            </Right>
          </Content>
        </Container>
      </Section>
    </>
  );
}
