FROM python:3
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /src
RUN pip install pipenv
COPY Pipfile /src/
RUN pipenv install
COPY . /src/

