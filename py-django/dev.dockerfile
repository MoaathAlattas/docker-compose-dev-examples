FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /app
WORKDIR /app
COPY ./src/requirements.txt /app/
RUN pip install -r requirements.txt