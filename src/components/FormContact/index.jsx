import * as S from './styles'
import { Button, Form } from 'react-bootstrap';

function FormContact() {
  return (
    <S.FormContact>
      <Form>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Text className="text-muted">
        </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="number">
          <Form.Label>Celular</Form.Label>
          <Form.Control type="number" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Text className="text-muted">
        </Form.Text>

        <Form.Group className="mb-3" controlId="number">
          <Form.Select aria-label="Default select example">
            <option>Selecione o assunto</option>
            <option value="1">Instalação</option>
            <option value="2">Produto</option>
            <option value="3">Valor</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="number">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control style={{ height: '100px' }} as="textarea" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            Enviar mensagem
          </Button>
        </div>
      </Form>
    </S.FormContact >
  );
}

export default FormContact;
