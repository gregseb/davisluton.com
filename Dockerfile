FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /config
ADD requirements /config/requirements/
RUN pip install -r /config/requirements/production.txt
RUN mkdir /src;
WORKDIR /src
